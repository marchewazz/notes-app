from flask.blueprints import Blueprint
import psycopg2
from flask import request

views = Blueprint("views", __name__)

#functions
def connectWithDB():

    host = "localhost"
    db = "taskApp"
    user = "postgres"
    password = "123"

    try:

        conn = psycopg2.connect(host=host, database=db, user=user, password=password)

    except (Exception, psycopg2.DatabaseError) as error:
        
        return error

    else:
        print('connected')
        return conn

#routing
@views.route("/home",  methods = ['GET', 'POST'])
def postTask():
    if request.method == 'POST':
        taskTitle = request.form.get('taskTitle')
        taskDescription = request.form.get('taskDescription')
        taskColor = request.form.get('color')
        taskAttachment = request.form.get('taskAttachment')
        notificationBool = request.form.get('notificationBool')
        deletingBool = request.form.get('deletingBool')
        expiringDate = request.form.get('expiringDate')

        return taskTitle