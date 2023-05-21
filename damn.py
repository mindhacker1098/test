from flask import Flask, request
from flask_cors import CORS,cross_origin
app = Flask(__name__)
CORS(app)
@app.route('/', methods=['GET'])
def handle_request():
 
  response_data = "ssssss"
  return response_data

if __name__ == '__main__':
  app.run()
