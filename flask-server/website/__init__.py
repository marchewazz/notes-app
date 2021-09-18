from flask import Flask, render_template

def create_app():
    app = Flask(__name__, static_folder="../../client/public", template_folder="../../client/public")
    app.config['SECRET_KEY'] = "kindasecret"    
    
    from .auth import auth

    app.register_blueprint(auth, url_prefix="/")

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        """ This is a catch all that is required for react-router """
        return render_template('index.html')

    return app