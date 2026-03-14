import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 hidden md:flex justify-between">
      <h1 className="text-xl font-bold">Eco Weighing Solutions</h1>

      <div className="space-x-6">
        <NavLink
  to="/"
  className={({ isActive }) =>
    `px-3 py-2 rounded transition ${
      isActive
        ? "bg-green-600 text-white"
        : "text-white hover:bg-green-500"
    }`
  }
>
  Home
</NavLink>

<NavLink
  to="/products"
  className={({ isActive }) =>
    `px-3 py-2 rounded transition ${
      isActive
        ? "bg-green-600 text-white"
        : "text-white hover:bg-green-500"
    }`
  }
>
  Products
</NavLink>

<NavLink
  to="/inquiry-cart"
  className={({ isActive }) =>
    `px-3 py-2 rounded transition ${
      isActive
        ? "bg-green-600 text-white"
        : "text-white hover:bg-green-500"
    }`
  }
>
  Inquiry Cart
</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;