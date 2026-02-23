import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!form.email || !form.password) {
      alert("All fields required");
      return;
    }

    if (
      storedUser &&
      form.email === storedUser.email &&
      form.password === storedUser.password
    ) {
      setUser(storedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-box">
        <h2>Login</h2>
        <input type="email" placeholder="Email" 
          onChange={(e) => setForm({...form, email: e.target.value})}/>
        <input type="password" placeholder="Password" 
          onChange={(e) => setForm({...form, password: e.target.value})}/>
        <button type="submit">Login</button>
        <p>Don't have account? <Link to="/">Signup</Link></p>
      </form>
    </div>
  );
}

export default Login;