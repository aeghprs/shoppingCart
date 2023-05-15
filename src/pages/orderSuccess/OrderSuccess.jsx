import success from "assets/products/success.jpg";

export const OrderSuccess = () => (
  <div className="flex flex-row justify-center">
    <div className="mt-5 text-center">
      <img
        className="my-10 block mx-auto"
        src={success}
        alt="Order Success"
        width="400"
        height="400"
      />

      <h2 className="text-center text-5xl">
        Your Order has been placed successfully.
      </h2>
    </div>
  </div>
);
