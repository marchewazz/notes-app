import React from "react";

function LogoutBar(props){
    return(
        <nav className="bg-blue-900 h-1/5 w-screen text-white">
            <span>LOGGED AS : {props.userEmail}</span> 
            <button>LOGOUT</button>        
        </nav>   
    )
}

export default LogoutBar