import { useDispatch } from "react-redux";

import {
  addToCart,
  decreaseItemQty,
  removeFromCart,
} from "actions/cart_actions";

export const CartItem = ({ data }) => {
  const { id, title, price, image, qty } = data;
  const dispatch = useDispatch();

  return (
    <div className="w-[700px] h-64 p-5 flex items-center rounded-3xl m-8 bg-transparent shadow-lg shadow-slate-700/50">
      <img src={image} alt="img" className="w-60 h-40" />
      <div className="w-full text-3xl pl-5">
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button
            onClick={() => {
              qty === 1
                ? dispatch(removeFromCart(id))
                : dispatch(decreaseItemQty(id, 1));
            }}
          >
            {" "}
            -{" "}
          </button>
          <input value={qty} className="w-10 text-center font-semibold" />
          <button onClick={() => dispatch(addToCart(id))}>+ </button>
        </div>
      </div>
    </div>
  );
};
