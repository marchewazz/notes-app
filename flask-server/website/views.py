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
        taskAttachment = request.form.get('taskAttachment') if request.form.get('taskAttachment') != "" else None
        notificationBool = True if request.form.get('notificationBool') == "on" else False
        deletingBool = True if request.form.get('deletingBool') == "on" else False
        expiringDate = request.form.get('expiringDate') if request.form.get('expiringDate') != "" else None
        conn = connectWithDB()

        if isinstance(conn, psycopg2.extensions.connection):
            cursor = conn.cursor()

            try:
                cursor.execute("INSERT INTO tasks(task_title, task_description, task_color, task_attachment, task_notification, task_delete_after_date, task_date_expiring, user_related_to_task) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)", 
                    vars=(taskTitle, taskDescription, taskColor, taskAttachment, notificationBool, deletingBool, expiringDate, 54))
            except Exception as error:
                    conn.close()
                    print(error)

                    return 'error'
            else:
                conn.commit()
                conn.close
                return 'task added'
        else:
            return 'We couldnt connect to db'