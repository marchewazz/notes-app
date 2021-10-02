from flask import Flask, render_template
from flask_cors import CORS
from .auth import guard, db
from flask_sqlalchemy import SQLAlchemy
from .models import User

def create_app():
    
    app = Flask(__name__, static_folder="../../client/public", template_folder="../../client/public")
    app.config['SECRET_KEY'] = "kindasecret"    
    app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:123@localhost:5432/taskApp"
    app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
    app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}
    
    db.init_app(app)

    CORS(app)

    guard.init_app(app, User)

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