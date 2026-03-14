import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import heroImage from "../assets/images/weighbridge-truck.png";
import ProductCard from "../components/ProductCard";

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (

    <div>

      {/* HERO SECTION */}

      <section
  className="relative h-[80vh] flex items-center justify-center text-white"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative text-center px-6">

    <h1 className="text-3xl md:text-5xl font-bold">
      Eco Weighing Solutions
    </h1>

    <p className="mt-4 text-base md:text-xl">
      Advanced Pit & Pitless Weighbridges, Tabletop Weighing Machines,
      and Industrial Weighing Systems
    </p>

    <div className="mt-8 flex justify-center gap-4">

      <Link to="/products">
        <button className="bg-green-600 hover:bg-green-700 active:scale-95 transition px-6 py-3 rounded text-white font-semibold">
  Explore Products
</button>
      </Link>

      <Link to="/inquiry-cart">
        <button className="bg-white text-black hover:bg-gray-200 active:scale-95 transition px-6 py-3 rounded font-semibold">
  Send Inquiry
</button>
      </Link>

    </div>

  </div>

</section>

      {/* PRODUCT CATEGORIES */}

      <section className="p-10 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Our Product Range
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              Pit Weighbridges
            </h3>
            <p className="text-gray-600">
              Durable pit-mounted weighbridges designed for heavy industrial vehicle weighing.
            </p>
          </div>

          <div className="border p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              Pitless Weighbridges
            </h3>
            <p className="text-gray-600">
              Easy-to-install weighbridges without foundation pits, ideal for flexible setups.
            </p>
          </div>

          <div className="border p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              Table Top Weighing Machines
            </h3>
            <p className="text-gray-600">
              Compact precision machines perfect for retail shops, labs, and packaging units.
            </p>
          </div>

        </div>

      </section>

      {/* FEATURED PRODUCTS */}

      <section className="p-10 bg-gray-100">

        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Machines
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {products.slice(0,3).map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={() => {}}
              cart={[]}
            />
          ))}

        </div>

        <div className="text-center mt-10">

          <Link to="/products">
            <button className="bg-green-600 text-white px-6 py-3 rounded">
              View All Products
            </button>
          </Link>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="p-10 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Why Choose Eco Weighing Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="font-semibold text-xl mb-2">
              ISO Certified
            </h3>
            <p className="text-gray-600">
              Our machines follow strict ISO quality standards.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              High Precision
            </h3>
            <p className="text-gray-600">
              Advanced sensors ensure accurate measurements every time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              Reliable Support
            </h3>
            <p className="text-gray-600">
              Dedicated customer service and maintenance support.
            </p>
          </div>

        </div>

      </section>

    </div>

  );
};

export default Home;