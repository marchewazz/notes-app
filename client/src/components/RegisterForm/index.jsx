import React from "react";

function RegisterForm () {

    return (
        <div className="flex flex-wrap justify-center">
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
            <input className="bg-red-700 placeholder-white"
            type="password"
            name="repeatedPassword"
            minLength="6"
            maxLength="20"
            required
            placeholder="Repeat password"
            />
            <input 
            type="submit"
            value="Register"
            />
          </form>
        </div>
    )
}

export default RegisterForm