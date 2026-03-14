import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";

const Products = () => {

  const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);


const addToCart = (product) => {

  const updatedCart = [...cart, product];

  setCart(updatedCart);

  localStorage.setItem("inquiryCart", JSON.stringify(updatedCart));

  toast.success("Added to Inquiry Cart");
};

  useEffect(() => {
    API.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-10 pb-20">

      <h1 className="text-3xl font-bold mb-8">
        Our Weighing Machines
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map(product => (
  <ProductCard
  key={product.id}
  product={product}
  addToCart={addToCart}
  cart={cart}
/>
))}

      </div>

    </div>
  );
};

export default Products;