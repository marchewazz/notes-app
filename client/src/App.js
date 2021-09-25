import React from 'react';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import TaskPage from './components/TaskPage';
import NavBar from './components/NavBar';

import { BrowserRouter, BrowserRouter as Route, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />
        <Switch>

          <Redirect exact from="/" to="/signup" />
          <Route exact path='/login'>
            <LoginPage />
          </Route>

          <Route exact path='/signup'>
            <RegisterPage />
          </Route>

          <Route exact path='/tasks'>
            <TaskPage />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App