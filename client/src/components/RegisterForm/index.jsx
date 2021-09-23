import React from "react";
import { Redirect, useHistory } from "react-router-dom";

function RegisterForm () {

    const history = useHistory();

    function userRegister(event){
      event.preventDefault();
      const data = new FormData(event.target);

      const email = data.get('email');
      const pass1 = data.get('password');
      const pass2 = data.get('repeatedPassword');

      fetch(`users/signup/${email}/${pass1}/${pass2}`)
        .then(res => res.json())
        .then(res => {
          console.log(res.status);
          if(res.status === 201){
            return alert('Your account is created!')
          } else {
            return alert(res.message)
          }
        })
    }

    return (
        <div className="flex flex-wrap justify-center">
          <form onSubmit={userRegister}>
            <input className="bg-blue-900 placeholder-white" 
            type="email" 
            name="email"
            required
            placeholder="Email Address"
            />
            <input className="bg-red-700 placeholder-white"
            type="password"
            name="password"
            minLength="6"
            maxLength="20"
            required
            placeholder="Password"
            />
            <input className="bg-red-700 placeholder-white"
            type="password"
            name="repeatedPassword"
            minLength="6"
            maxLength="20"
            required
            placeholder="Repeat password"
            />
            <button className="bg-green-700"
            type="submit"
            > 
              REGISTER
            </button>
          </form>
        </div>
    )
}

export default RegisterForm