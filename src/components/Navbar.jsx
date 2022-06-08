import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


const Navbar = () => {
    const {isAuth, logout}= useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin= ()=>{
        if(isAuth) logout();
        else navigate("/")
    }
  return (
    <div className='navbar'>
        <Link to="/">Login</Link>
        <Link to="/todoapp">Todo App</Link>
        <button onClick={handleLogin}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  )
}

export default Navbar