import React from "react";
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav className="bg-blue-900 h-1/5 w-screen text-white">
            <Link to="/login">LOGIN</Link>
            
            <Link to="/signup">SIGN UP</Link>
        </nav>
    )
}

export default NavBar