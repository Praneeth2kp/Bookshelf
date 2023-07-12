import { useState } from "react";
import React from "react";
import '../login/login.css';
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";

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
                navigate("/home");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                console.error(error);
            });
    }

    return (
        <div>
            <form className="form1">
                <label>Email</label><input type='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
                <label>Password</label><input type='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
                {error && <p>{error}</p>}
                <button type="button" onClick={signin}>Submit</button>
                <Link to="/signup"><button>Signup</button></Link>
            </form>
        </div>
    )
}

export default Login;
