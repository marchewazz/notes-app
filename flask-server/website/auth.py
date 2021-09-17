from datetime import date
from flask import Flask, request, flash, render_template
from flask.blueprints import Blueprint
from werkzeug.security import generate_password_hash
import psycopg2

#app initializing
auth = Blueprint("auth", __name__)

#functions
def connectWithDB():

    host = "localhost"
    db = "taskApp"
    user = "postgres"
    password = "123"

    try:

        conn = psycopg2.connect(host=host, database=db, user=user, password=password)

    except (Exception, psycopg2.DatabaseError) as error:
        
        print(error)
        return 

    finally:

        return conn

#routing
@auth.route("/", methods = ['GET', 'POST'])
def index():
    return render_template ('index.html')
