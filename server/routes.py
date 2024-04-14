from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from utils import allowed_file, predict, logger
import os

upload_route = Blueprint('upload_route', __name__)

UPLOAD_FOLDER = 'uploads'

@upload_route.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    selectedModel = request.form.get('selectedModel', 'model_1')

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)
        try:
            result = predict(filepath, selectedModel)
            os.remove(filepath)  # Clean up file after prediction
            return jsonify({'result': result}), 200
        except Exception as e:
            logger.error(f"Prediction error: {str(e)}")
            return jsonify({'error': 'Error occurred during prediction'}), 500
    else:
        return jsonify({'error': 'Invalid file type'}), 400
