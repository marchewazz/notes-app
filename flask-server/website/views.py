import psycopg2

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