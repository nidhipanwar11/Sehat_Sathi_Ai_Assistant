from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
from lungcancer import predict_image_lung
from tuberculosis import predict_image_tuber
app = Flask(__name__)
CORS(app)  # Allow all origins (for development)

@app.route('/upload', methods=["POST","GET"])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"message": "No file part"}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({"message": "No selected file"}), 400
    image = Image.open(file) 
    # You can save the file if needed
    file.save(f"./{file.filename}")

    return jsonify({"message": "Image received successfully"}), 200



@app.route('/checklungcancer', methods=["POST","GET"])
def upload_image_lung():
    if 'image' not in request.files:
        return jsonify({"message": "No file part"}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({"message": "No selected file"}), 400
    # image = Image.open(file) 
    image = Image.open(file)  # Open image
    image = image.resize((224, 224))
    # You can save the file if needed
    file.save(f"./{file.filename}")
    prediction = predict_image_lung(image)
    # prediction="hello"
    return jsonify({"message": f"{prediction}"}), 200




@app.route('/checktubercancer', methods=["POST","GET"])
def upload_image_tuber():
    if 'image' not in request.files:
        return jsonify({"message": "No file part"}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({"message": "No selected file"}), 400
    # image = Image.open(file) 
    image = Image.open(file)  # Open image
    image = image.resize((300, 300))
    # You can save the file if needed
    file.save(f"./{file.filename}")
    prediction = predict_image_tuber(image)
    # prediction="hello"
    return jsonify({"message": f"{prediction}"}), 200






@app.route("/check-age", methods=["POST","GET"])
def check_age():
    data = request.get_json()
    age = data.get("age", 0)

    if age >= 18:
        return jsonify({"message": "✅ You are eligible to vote!"})
    else:
        return jsonify({"message": "❌ You are not eligible to vote!"})

if __name__ == "__main__":
    app.run(debug=True)
