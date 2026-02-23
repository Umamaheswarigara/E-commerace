import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      {user && <Navbar setUser={setUser} cartCount={cart.length} />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            user ? <Dashboard cart={cart} setCart={setCart} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/cart"
          element={user ? <Cart cart={cart} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;