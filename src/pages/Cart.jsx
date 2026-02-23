function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="dashboard">
      <h1>Your Cart 🛍️</h1>
      {cart.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;