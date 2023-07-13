import React from 'react';
import { useEffect, useState } from 'react';
import '../navbar/navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';


function Nav() {
    const navigate = useNavigate();
    const handlelogout = () => {
        auth.signOut();
        navigate("/login")
    }
    return (
        <div className="navbar">
            <div className='tabbar'>
                <Link to="/home"><button className='home'>Home</button></Link>
                <Link to="/library"><button className='library'>Library</button></Link>
            </div>
            <div>
                <h2 className='logo1'>BookShelf +</h2>

            </div>
            <div className='signbtns'>
            {auth.currentUser ? (
                    <div>
                        <button onClick={handlelogout} className='signinbtn'>Logout</button>
                    </div>) : (<Link className='signinbtn' to="/login"><button className='signinbtn'>Login</button></Link>)}
            </div>

        </div>
    )
}


export default Nav
