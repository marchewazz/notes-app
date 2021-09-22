import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import NavBar from './components/NavBar';
import AddTaskForm from './components/AddTaskForm';
import TasksContainer from './components/TasksContatiner';
import LogoutBar from './components/LogoutBar';
import { BrowserRouter, BrowserRouter as Route, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />
        <Switch>

          <Redirect exact from="/" to="/signup" />
          <Route exact path='/login'>
            <LoginForm />
          </Route>

          <Route exact path='/signup'>
            <RegisterForm />
          </Route>

          <Route exact path='/home'>
            <div className="grid grid-cols-2 grid-rows-2">
              <LogoutBar className="col-span-2"/>
              <TasksContainer className="row-start-2"/>
              <div className="col-start-2">
                <AddTaskForm />
              </div>
            </div>
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App