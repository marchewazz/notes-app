from flask import Flask

def create_app():
    app = Flask(__name__, static_folder="../../client/public", template_folder="../../client/public")
    app.config['SECRET_KEY'] = "kindasecret"    

    from .auth import auth

    app.register_blueprint(auth, url_prefix="/")

    return app