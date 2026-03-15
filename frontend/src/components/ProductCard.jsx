import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart, cart }) => {

  const isInCart = cart?.some(p => p.id === product.id);

  return (
   <div className="border rounded-lg shadow p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <img
        src={product.image_url}
        alt={product.name}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="text-lg font-bold mt-2">
        {product.name}
      </h2>

      <p>Capacity: {product.capacity}</p>
      <p>Accuracy: {product.accuracy}</p>

      <div className="flex gap-3 mt-4">

        <Link
          to={`/products/${product.id}`}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded transition active:scale-95"
        >
          Read More
        </Link>

        <button
          onClick={() => {
            console.log("clicked");
            addToCart(product);
          }}
          disabled={isInCart}
          className={`px-4 py-2 rounded text-white font-medium transition
            ${
              isInCart
                ? "bg-green-800 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 active:scale-95"
            }
          `}
        >
          {isInCart ? "Added" : "Add Inquiry"}
        </button>

      </div>

    </div>
  );
};

export default ProductCard;