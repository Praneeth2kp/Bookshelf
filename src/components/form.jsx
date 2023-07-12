import { useState } from "react";
import React from "react";
const Form = () => {
    const [fullname, setFullname] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [phone, setPhone] = useState(" ");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullname);
        console.log(email);
        console.log(phone)
    }
    return (
        <div>
            <form className="form1" onSubmit={handleSubmit}>
                <label>Full Name</label><input type='text' onChange={(e) => setFullname(e.target.value)} /><br></br>
                <label>Email</label><input type='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
                <label>Phone Number</label><input type='tel'  onChange={(e) => setPhone(e.target.value)} /><br></br>
                <label>Password</label><input type='password' /><br></br>
                <label>Confirm Password</label><input type='password' /><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
export default Form;