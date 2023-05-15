import { Product } from "components/Product";

import { PRODUCTS } from "constants/product";

const ProductItem = () => (
  <div className="grid grid-rows-3 grid-flow-col gap-4 w-full ">
    {PRODUCTS.map((product) => (
      <Product data={product} />
    ))}
  </div>
);

export const Shop = () => (
  <div className="shop">
    <div className="mt-24 text-center text-5xl">
      <h1>Pragesh's Shop</h1>
    </div>
    <ProductItem />
  </div>
);
