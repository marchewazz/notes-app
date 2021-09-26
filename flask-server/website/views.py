import json
from json.encoder import JSONEncoder
from flask.blueprints import Blueprint
from flask import jsonify
from .models import Task

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



