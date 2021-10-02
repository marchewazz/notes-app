from flask.blueprints import Blueprint
from sqlalchemy.exc import SQLAlchemyError
from .models import Task
from .auth import db

views = Blueprint("views", __name__)

@views.route("tasks/<userID>")
def getTasks(userID):
    tasks = []
    tasksDb = Task.query.filter_by(user_related_to_task=userID).all()
    for x in tasksDb:
        tasks.append({
            'task_id': x.task_id, 
            'task_title': x.task_title, 
            'task_description': x.task_description, 
            'task_color': x.task_color, 
            'task_attachment': x.task_attachment, 
            'task_notification': x.task_notification, 
            'task_delete_after_date': x.task_delete_after_date, 
            'task_date_expiring': x.task_date_expiring
            })

    return {"tasks": tasks}
@views.route("tasks/add/<taskTitle>/<taskDesc>/<taskColor>/<taskAtt>/<taskNot>/<taskDelete>/<taskDateExp>/<userID>", methods=['GET', 'POST'])
def addTask(taskTitle, taskDesc, taskColor, taskAtt, taskNot, taskDelete, taskDateExp, userID):

    taskToAdd = Task(task_title=taskTitle, task_description=taskDesc, task_color=taskColor, task_attachment=taskAtt, task_notification=bool(taskNot), task_delete_after_date=bool(taskDelete), task_date_expiring=taskDateExp, user_related_to_task=userID)
    try:
        db.session.add(taskToAdd)
        db.session.commit()
    except SQLAlchemyError as e:
        return {"message" : str(e)}
    else:
        return {"message" : "task added"}

