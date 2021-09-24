from flask.blueprints import Blueprint
import psycopg2
from flask import request

views = Blueprint("views", __name__)

