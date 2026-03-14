import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdInventory } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow md:hidden z-50">

      <div className="flex justify-around py-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${
              isActive ? "text-green-600" : "text-gray-500"
            }`
          }
        >
          <AiFillHome size={22} />
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${
              isActive ? "text-green-600" : "text-gray-500"
            }`
          }
        >
          <MdInventory size={22} />
          Products
        </NavLink>

        <NavLink
          to="/inquiry-cart"
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${
              isActive ? "text-green-600" : "text-gray-500"
            }`
          }
        >
          <FaShoppingCart size={22} />
          Inquiry
        </NavLink>

      </div>

    </div>
  );
};

export default MobileNav;