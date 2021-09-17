import React from 'react'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <>
      <LoginForm/>
      <RegisterForm/>
    </>
  )
}

export default App