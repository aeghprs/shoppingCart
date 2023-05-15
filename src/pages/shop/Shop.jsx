import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "actions/product_actions";
import { getAllProducts } from "api/getAllProducts";

import { Product } from "components/Product";

const ProductItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const allProducts = async () => {
      const products = await getAllProducts();

      dispatch(getProducts(products));
    };

    allProducts();
  }, []);

  const Products = useSelector((state) => state.cart.products);

  return (
    <div className="grid grid-rows-6 grid-cols-4 grid-flow-col gap-4 w-full ">
      {Products.map((product) => (
        <Product data={product} />
      ))}
    </div>
  );
};

export const Shop = () => (
  <div className="shop">
    <div className="mt-24 text-center text-5xl">
      <h1>Pragesh's Shop</h1>
    </div>
    <ProductItem />
  </div>
);
