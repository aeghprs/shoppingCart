import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  const totalItemsInCart = useSelector((state) => state.cart.cart.length);

  return (
    <div className="bg-black w-full h-20 flex justify-end items-center">
      <div className="flex items-center mr-12">
        <Link to="/" className="ml-5 text-white text-2xl">
          {" "}
          Shop{" "}
        </Link>
        <Link to="/categories" className="ml-5 text-white text-2xl">
          {" "}
          Categories{" "}
        </Link>
        <Link to="/contact" className="ml-5 text-white text-2xl">
          {" "}
          Contact{" "}
        </Link>
        <Link
          to="/cart"
          className="ml-5 text-white text-2xl flex justify-between items-center"
        >
          <ShoppingCart size={32} /> : {totalItemsInCart}
        </Link>
      </div>
    </div>
  );
};
