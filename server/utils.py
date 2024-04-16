import numpy as np
from keras.preprocessing import image as keras_image
from keras.models import load_model
import logging

logger = logging.getLogger(__name__)
disease_class = ['M', 'B']

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def predict(image_path, selectedModel):
    model_path = 'models/' + selectedModel + '.h5'
    model = load_model(model_path)
    img = keras_image.load_img(image_path, grayscale=False, target_size=(224, 224))
    x = keras_image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x /= 255
    custom = model.predict(x)
    ind = np.argmax(custom[0])
    return disease_class[ind]
