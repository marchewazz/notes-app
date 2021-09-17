from datetime import date
from flask import request, flash, render_template
from flask.blueprints import Blueprint
from werkzeug.security import generate_password_hash
from .views import connectWithDB

#app initializing
auth = Blueprint("auth", __name__)

#routing
@auth.route("/", methods = ['GET', 'POST'])
def index():
    return render_template ('index.html')

@auth.route("/signup", methods = ['GET', 'POST'])
def signup():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        repeatedPassword = request.form.get('repeatedPassword')

        if password != repeatedPassword:
            return 'Passwords don\'t match'
        else:
            try:
                conn = connectWithDB()
            except Exception:
                return 'cannot connect'
            else:
                cursor = conn.cursor()

                cursor.execute("SELECT * FROM users WHERE user_email = (%s)", vars=(email,))
                data = cursor.fetchall()

                if data:
                    conn.close()
                    return 'We got your email in data base plz login'
                else:
                    try:
                        cursor.execute("INSERT INTO users(user_email, user_password, user_create_data) VALUES (%s, %s, %s)", (email, generate_password_hash(password, method='sha256'), date.today()))
                    except Exception as error:
                        conn.close()
                        print(error)
                        return 'error'
                    else:
                        conn.commit()
                        conn.close()
                        return 'User added!'
            

    return render_template("index.html")
