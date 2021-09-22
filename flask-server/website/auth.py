from datetime import date
from flask import request, render_template
from flask.blueprints import Blueprint
from werkzeug.security import generate_password_hash
from .views import connectWithDB

#app initializing
auth = Blueprint("auth", __name__)

#routing

@auth.route("/users/signup/<email>/<password>/<repeatedpassword>", methods = ['GET', 'POST'])
def signup(email, password, repeatedpassword):

    if password != repeatedpassword:
        return {"message": 'Passwords don\'t match'}
    else:
        try:
            conn = connectWithDB()
        except Exception:
            return {"message": 'cannot connect'}
        else:
            cursor = conn.cursor()

            cursor.execute("SELECT * FROM users WHERE user_email = (%s)", vars=(email,))
            data = cursor.fetchall()

            if data:
                conn.close()
                return {"message": 'We got your email in data base plz login'}
            else:
                try:
                    cursor.execute("INSERT INTO users(user_email, user_password, user_create_data) VALUES (%s, %s, %s)", (email, generate_password_hash(password, method='sha256'), date.today()))
                except Exception as error:
                    conn.close()
                    print(error)
                    return {"message": 'error'}
                else:
                    conn.commit()
                    conn.close()
                    return {"message": 'User added!'}
