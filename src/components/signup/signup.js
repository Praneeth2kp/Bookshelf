import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";


function Signup() {
    const auth = getAuth(app);
    const [password, setPassword] = useState(" ");
    const [email, setEmail] = useState(" ");
    const navigate = useNavigate();


    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Created An account");
                navigate("/home");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                alert(errorCode)
                // ..
            });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(fullname);
        console.log(email);
        // console.log(phone)
    }


    return (
        <div>
            <form className="form1" onSubmit={handleSubmit}>
                {/* <label>Full Name</label><input type='text' onChange={(e) => setFullname(e.target.value)} /><br></br> */}
                <label>Email</label><input type='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
                {/* <label>Phone Number</label><input type='tel' onChange={(e) => setPhone(e.target.value)} /><br></br> */}
                <label>Password</label><input type='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
                <label>Confirm Password</label><input type='password' /><br></br>
                <button type="submit" onClick={signup}>Submit</button>
                <Link to="/login"><button>Login</button></Link>
            </form>
        </div>
    )

}

export default Signup;