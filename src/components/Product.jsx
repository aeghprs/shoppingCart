import { useDispatch } from "react-redux";

import { addToCart } from "actions/cart_actions";

export const Product = (props) => {
  const { id, title, price, image } = props.data;
  const dispatch = useDispatch();

  return (
    <div className="mx-auto mt-16 w-80 h-4/5 flex justify-center items-center flex-col hover:cursor-pointer">
      <img src={image} alt={title} className="w-[400px] h-80" />
      <div className="text-center">
        <p>
          <b>{title}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button
        className="text-black rounded-full p-3 m-1 bg-zinc-400 hover:cursor-pointer hover:text-white"
        onClick={() => dispatch(addToCart(id))}
      >
        Add To Cart
      </button>
    </div>
  );
};
