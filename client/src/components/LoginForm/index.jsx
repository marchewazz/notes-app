import React from "react";

function LoginForm(){
    
    function userLogin(event){
      event.preventDefault();
      const data = new FormData(event.target);

      const email = data.get('email');
      const pass1 = data.get('password');

      fetch(`users/login/${email}/${pass1}`)
      .then(res => res.json())  
      .then(res => {
          console.log(res.status);
          return alert(res.message)
        })
    }
    return (
      <div className="place-self-center">
          <form onSubmit={userLogin}>
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
            <input 
            type="submit"
            value="Login"
            />
          </form>
        </div>
      )
}

export default LoginForm;