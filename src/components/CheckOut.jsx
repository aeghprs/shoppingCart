import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { emptyCart } from "actions/cart_actions";

export const CheckOut = ({ totalAmount, cartItems }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div class=" mt-6 mx-auto flex justify-center">
      <div class="px-2 w-1/2 my-10">
        <div class="p-4 bg-gray-100 rounded-full">
          <h1 class="ml-2 font-bold uppercase">Order Details</h1>
        </div>
        <div class="p-4">
          <p class="mb-6 italic">
            Shipping and additional costs are calculated based on values you
            have entered
          </p>
          <div class="flex justify-between border-b">
            <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
              Units
            </div>
            <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
              {cartItems.length} items
            </div>
          </div>
          <div class="flex justify-between pt-4 border-b">
            <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
              SubTotal
            </div>
            <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
              ${totalAmount}
            </div>
          </div>
          <button
            class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
            onClick={() => {
              dispatch(emptyCart());
              navigate("/success");
            }}
          >
            <svg
              aria-hidden="true"
              data-prefix="far"
              data-icon="credit-card"
              class="w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
              />
            </svg>
            <span class="ml-2 mt-5px">Proceed to checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};
