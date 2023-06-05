import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        onClick={() => {
          dispatch(addToCart(id));
          toast.success("Product added to cart");
        }}
      >
        Add To Cart
      </button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
