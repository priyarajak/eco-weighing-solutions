import { useState, useEffect } from "react";
import API from "../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const InquiryCart = () => {

  const [cart, setCart] = useState([]);

  const [form, setForm] = useState({
    customer_name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const stored = localStorage.getItem("inquiryCart");

    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const removeFromCart = (id) => {

    const updatedCart = cart.filter(p => p.id !== id);

    setCart(updatedCart);

    localStorage.setItem("inquiryCart", JSON.stringify(updatedCart));
  };

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const sendInquiry = async () => {

  try {

    for (let product of cart) {

      await API.post("/inquiry", {
        customer_name: form.customer_name,
        email: form.email,
        machine_id: product.id,
        machine_name: product.name,
        message: form.message
      });

    }

    toast.success("Inquiry sent successfully");

    // Clear cart everywhere
    localStorage.removeItem("inquiryCart");

    setCart([]);

    // Reset form
    setForm({
      customer_name: "",
      email: "",
      message: ""
    });

  } catch (err) {

    toast.error("Failed to send inquiry");

  }

};

  return (

    <div className="p-10 max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Inquiry Cart
      </h1>

      {cart.length === 0 && (

  <div className="flex flex-col items-center justify-center text-center mt-20">
    <FaShoppingCart size={60} className="text-gray-400 mb-4" />

    <h2 className="text-2xl font-semibold mb-3">
      Your Inquiry Cart is Empty
    </h2>

    <p className="text-gray-500 mb-6">
      Add products you want to send enquiry for.
    </p>

    <Link to="/products">
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded transition active:scale-95">
        View All Products
      </button>
    </Link>

  </div>

)}

      {cart.map(product => (

        <div
          key={product.id}
          className="border p-4 mb-3 flex justify-between items-center"
        >

          <div>

            <p className="font-semibold">
              {product.name}
            </p>

            <p className="text-sm text-gray-500">
              Capacity: {product.capacity}
            </p>

          </div>

          <button
  onClick={() => removeFromCart(product.id)}
  className="bg-red-500 hover:bg-red-600 active:scale-95 text-white px-3 py-1 rounded transition"
>
  Remove
</button>

        </div>

      ))}

      {cart.length > 0 && (

        <div className="mt-10 border p-6 rounded">

          <h2 className="text-xl font-semibold mb-4">
            Send Inquiry
          </h2>

          <input
            name="customer_name"
            placeholder="Your Name"
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />

          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />

          <button
            onClick={sendInquiry}
            className="bg-green-600 text-white px-6 py-3 rounded"
          >
            Send Inquiry
          </button>

        </div>

      )}

    </div>

  );

};

export default InquiryCart;