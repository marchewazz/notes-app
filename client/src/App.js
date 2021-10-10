import React from 'react';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import TasksPage from './components/TasksPage';

import appHistory from './services/history'

import { Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router history = {appHistory}>
        <Switch>
          <Route exact path='/signup' component={RegisterPage} />
          <Route exact path='/login' component={() => <LoginPage />} />
          <Route exact path='/tasks' component={TasksPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App