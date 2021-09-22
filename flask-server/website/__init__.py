from flask import Flask, render_template
import flask_cors

def create_app():
    cors = flask_cors.CORS()
    
    app = Flask(__name__, static_folder="../../client/public", template_folder="../../client/public")
    app.config['SECRET_KEY'] = "kindasecret"    
    cors.init_app(app)
    from .auth import auth
    from .views import views

    app.register_blueprint(auth, url_prefix="/")
    app.register_blueprint(views, url_prefix="/")

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        """ This is a catch all that is required for react-router """
        return render_template('index.html')

    return app