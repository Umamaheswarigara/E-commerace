import ProductCard from "../components/ProductCard";

function Dashboard({ cart, setCart }) {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      image: "https://images.unsplash.com/photo-1518443895914-6c5a8e8d41c7"
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 7000,
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
    },
    {
      id: 5,
      name: "Camera",
      price: 40000,
      image: "https://images.unsplash.com/photo-1519183071298-a2962eadc3c6"
    },
    {
      id: 6,
      name: "Gaming Mouse",
      price: 1500,
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
    },
    {
      id: 7,
      name: "Keyboard",
      price: 2000,
      image: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83"
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      price: 3500,
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
    },
    {
      id: 9,
      name: "Tablet",
      price: 18000,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    },
    {
      id: 10,
      name: "Shoes",
      price: 4000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 11,
      name: "Backpack",
      price: 2200,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
      id: 12,
      name: "Sunglasses",
      price: 1200,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    },
    {
      id: 13,
      name: "Office Chair",
      price: 8000,
      image: "https://images.unsplash.com/photo-1582582429416-3e0f1c1c8b34"
    },
    {
      id: 14,
      name: "Monitor",
      price: 15000,
      image: "https://images.unsplash.com/photo-1527443224154-c4c66a9b7f02"
    },
    {
      id: 15,
      name: "Coffee Maker",
      price: 5000,
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="dashboard">
      <h1>Our Products</h1>
      <div className="products">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;