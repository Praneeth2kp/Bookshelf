import { useState, useEffect } from "react";
import React from "react";
import '../login/login.css';
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

function Login() {
    const auth = getAuth(app);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const signin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Signed in");
                navigate("/library");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                console.error(error);
            });
    }
    const [value, setValue] = useState(" ");
    const handleClick = () => {
        const provide = new GoogleAuthProvider();
        try {
            signInWithPopup(auth, provide)
            .then((data) => {
                setValue(data.user.email);
                console.log(value);
                alert(value);

                console.log(auth.currentUser.email);
                navigate("/library")
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        }
        catch (error) {
            console.log(error);
        }
    };


    const handlelogout = () => {
        auth.signOut();
        navigate('/login');
    }

    const handleFacebookLogin = () => {
        const provider = new FacebookAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setValue(user.email);
                localStorage.setItem("email", user.email);
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        setValue(localStorage.getItem("email"));
    }, []);




    return (
        <div>
            <form className="form111">
                <h1>Login To <span className="title1">BookShelf </span></h1>
                <div className="form11">
                    <input placeholder="Email ID" type='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
                    <input placeholder="Password" type='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
                    {error && <p>{error}</p>}
                    <button className="btn-1" type="button" onClick={signin}>Login</button>
                    <div className="google">

                        <button className="btn-2" onClick={handleClick}>Login with Google</button>
                        <button className="btn-3" onClick={handleFacebookLogin}>Login with FB</button>
                    </div>
                    <div className="sign">
                        <p className="p1"> New user?<Link to="/signup"> Register</Link></p>
                        <a href="#" className="p2">Forget Password</a>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Login;
