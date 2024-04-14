from flask import Flask
from flask_cors import CORS
from routes import upload_route

app = Flask(__name__)
CORS(app)

app.register_blueprint(upload_route)

if __name__ == '__main__':
    app.run(debug=True)
