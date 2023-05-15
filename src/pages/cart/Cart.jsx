import { useSelector } from "react-redux";

import { CartItem } from "../../components/CartItem";
import { CheckOut } from "../../components/CheckOut";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

    if (!cartItems.length) return <h1 className="text-center text-5xl mt-24">Your Cart is Empty.</h1>

  return (
    <div className="cart">
      <h1 className="text-center text-5xl mt-24">Your Cart Items</h1>
      <div className="flex flex-col justify-center items-center">
        {cartItems.map((product) => (
          <>
            <CartItem data={product} />
          </>
        ))}
      </div>
      <CheckOut totalAmount={totalAmount} cartItems={cartItems} />
    </div>
  );
};
