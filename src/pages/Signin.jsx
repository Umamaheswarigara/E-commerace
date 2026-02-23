import React, { useState } from "react";
import "../styles/Auth.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>

        <input type="email" placeholder="Email Address" required onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
