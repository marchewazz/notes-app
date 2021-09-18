import React from 'react'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import NavBar from './components/NavBar';
import { BrowserRouter, BrowserRouter as Route, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Switch>
          
          <Route exact path='/'>
            <Redirect to="/signup" />
          </Route>

          <Route exact path="/login">
            <LoginForm />
          </Route>

          <Route exact path="/signup">
            <RegisterForm />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App