import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-box">
        <h2>Create Account</h2>
        <input type="email" placeholder="Email" 
          onChange={(e) => setForm({...form, email: e.target.value})}/>
        <input type="password" placeholder="Password" 
          onChange={(e) => setForm({...form, password: e.target.value})}/>
        <input type="password" placeholder="Confirm Password" 
          onChange={(e) => setForm({...form, confirmPassword: e.target.value})}/>
        <button type="submit">Sign Up</button>
        <p>Already have account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Signup;