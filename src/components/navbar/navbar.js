import React, { Component } from 'react'
import '../navbar/navbar.css'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
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
                    <Link to="/login"><button className='signinbtn'>Sign In</button></Link>
                    <Link to="/signup"><button className='signupbtn'>Sign up</button></Link>
                </div>

            </div>
        )
    }
}

export default Nav
