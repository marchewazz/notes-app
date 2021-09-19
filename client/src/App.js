import React from 'react'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import NavBar from './components/NavBar';
import AddTaskForm from './components/AddTaskForm';
import TasksContainer from './components/TasksContatiner';
import { BrowserRouter, BrowserRouter as Route, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>

        

        <Switch>
          
          <Route exact path='/'>
            <Redirect to='/signup' />
          </Route>

          <Route exact path='/login'>
            <NavBar />
            <LoginForm />
          </Route>

          <Route exact path='/signup'>
            <NavBar />
            <RegisterForm />
          </Route>

          <Route exact path='/home'>
            <TasksContainer />
            <AddTaskForm />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App