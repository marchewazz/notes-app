from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.sql.schema import Table

engine = create_engine("postgresql://postgres:123@localhost:5432/taskApp")
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))
Base = declarative_base(engine)
Base.query = db_session.query_property()

class User(Base):
    __table__ = Table('users', Base.metadata, autoload=True, autoload_with=engine)
    

    @classmethod
    def lookup(cls, username):
        return cls.query.filter_by(username=username).one_or_none()

    @classmethod
    def identify(cls):
        return cls.query.get('user_id')
    
    @property
    def rolenames(self):
        try:
            return self.roles.split(',')
        except Exception:
            return []

    @property
    def password(self):
        return self.user_password

    @property
    def identity(self):
        return self.user_id

    def is_valid(self):
        return self.is_active
