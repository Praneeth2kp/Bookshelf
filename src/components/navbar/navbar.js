import React from 'react';
import { useEffect, useState } from 'react';
import '../navbar/navbar.css'
import cart from '../../assets/fluent_backpack-28-regular.svg'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';


function Nav() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [isloggedin , setLogin] = useState(false); 
    
    
    useEffect( () => {
        // fetchData();
        const unsunbscribe = auth.onAuthStateChanged((user) => {
            if(user){
                setEmail(user.email);
                setLogin(true);
            }
            else{
                // setEmail(' ');
                setLogin(false);
            }
        });
    });
    const handlelogout = () => {
        auth.signOut();
        navigate("/login")
    };
    return (
        <div className="navbar">
            <div className='tabbar'>
                <Link to="/"><button className='home'>Home</button></Link>
                <Link to="/"><button className='library'>Library</button></Link>
            </div>
            <div>
                <h2 className='logo1'>BookShelf +</h2>

            </div>
            <div className='pb'>
       
                <img src={cart} className='cart_logo'></img>
       
            <div className='signbtns'>
            {auth.currentUser ? (
                    <div>
                        <button onClick={handlelogout} className='signinbtn'>Logout</button>
                    </div>) : (
                        <div>
                    <Link className='signinbtn' to="/login">Login</Link>

                        </div>
                    )}
            </div>
            </div>
            

        </div>
    )
}


export default Nav
