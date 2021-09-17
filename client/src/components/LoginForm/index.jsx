import React from "react";

function LoginForm(){
    
    return (
      <div class="flex flex-wrap justify-center">
          <form method="POST">
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