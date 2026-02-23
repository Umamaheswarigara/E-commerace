import { Link, useNavigate } from "react-router-dom";

function Navbar({ setUser, cartCount }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>ShopZone</h2>
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/cart">Cart 🛍️ ({cartCount})</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;