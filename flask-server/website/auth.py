from datetime import date
from flask.blueprints import Blueprint
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import check_password_hash, generate_password_hash
from .models import User
from flask_login import login_user, logout_user, login_required, current_user

db = SQLAlchemy()
#auth initializing
auth = Blueprint("auth", __name__)

#routing

@auth.route("/users/signup/<email>/<password>/<repeatedpassword>", methods=['GET', 'POST'])
def signup(email, password, repeatedpassword):
    email_exist = User.query.filter_by(user_email=email).first()
   
    if password != repeatedpassword:
        return {"message": 'Passwords don\'t match', "status": 403}
    else:
        if email_exist:
            return {"message": 'We got your email in data base plz login', "status": 409}
        else:
            new_user = User(user_email=email, user_password=generate_password_hash(password, method='sha256'), user_create_data=date.today())

            db.session.add(new_user)
            db.session.commit()
            return {"message": 'User added!', "status": 201}

@auth.route("/users/login/<email>/<password>")
def login(email, password):

    user = User.query.filter_by(user_email=email).first()
    
    if not user:
        return {"message": "We dont have that email in db", "status": "yes"}
    else:
        if check_password_hash(user.user_password, password):
            login_user(user, remember=True)
            return {'message' : 'logged', 'user_id': user.user_id, 'user_email': user.user_email}
        else:
            return {'message': 'not logged'}