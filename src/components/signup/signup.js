import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";
import '../signup/signup.css';

function Signup() {
    const auth = getAuth(app);
    const [password, setPassword] = useState(" ");
    const [email, setEmail] = useState(" ");
    const navigate = useNavigate();


    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                alert("Created An account");
                navigate("/library");
            })
            .catch((error) => {
                const errorCode = error.code;
                alert(errorCode)
            });
    }

    return (
        <div>
            <form className="form111">
            <h1>Register for <span className="title1">BookShelf</span></h1>
                <div className="form11">
                    <input placeholder="Email ID" type='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
                    <input placeholder="Password" type='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
                    <input placeholder="Confirm Password" type='password' /><br></br>
                    <button className="btn-1" type="button" onClick={signup}>SignUp</button>
                </div>
                <div className="sign">
                    <p className="p1"> Already a user?<Link to="/"> Login Here</Link></p>
                    <a href="#">Forget Password</a>
                </div>
            </form>
        </div>
    )
}

export default Signup;