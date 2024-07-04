from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS


socketio = SocketIO()


def create_app(debug=False):
    app = Flask(__name__)

    app.debug = debug
    app.config['SECRET_KEY'] = 'gjr39dkjn344_!67#'
    # Enable CORS for the app
    CORS(app, resources={r"/*": {"origins": "*"}})
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    socketio.init_app(app, cors_allowed_origins='*', manage_session=True)
    return app
