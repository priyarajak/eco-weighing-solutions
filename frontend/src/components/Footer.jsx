import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-10">

        {/* COMPANY */}

        <div>
          <h3 className="text-lg font-semibold mb-3">
            Eco Weighing Solutions
          </h3>

          <p className="text-gray-400">
            Providing high precision industrial weighing machines
            including pit weighbridges, pitless weighbridges,
            and tabletop weighing machines.
          </p>
        </div>

        {/* CONTACT */}

        <div>
          <h3 className="text-lg font-semibold mb-3">
            Contact Us
          </h3>

          <p className="text-gray-400">
            📞 Phone: 7363838830
          </p>

          <p className="text-gray-400">
            📧 Email: ecoweighingsolutions@gmail.com
          </p>
        </div>

        {/* LINKS */}

        <div>
          <h3 className="text-lg font-semibold mb-3">
            Useful Links
          </h3>

          <div className="flex flex-col space-y-2 text-gray-400">

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/inquiry-cart">
              Inquiry Cart
            </Link>

            <Link to="/login">
              Admin Login
            </Link>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="text-center border-t border-gray-700 py-4 text-gray-500">

        © {new Date().getFullYear()} Eco Weighing Solutions.
        All rights reserved.

      </div>

    </footer>
  );
};

export default Footer;