import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "actions/product_actions";
import { getAllProducts } from "api/getAllProducts";

import { Product } from "components/Product";
import "./pagination.css";

const ProductItem = () => {
  const Products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(0);
  const ProductsPerPage = 6;
  const pagesVisited = pageNumber * ProductsPerPage;
  const pageCount = Math.ceil(Products.length / ProductsPerPage);

  const changePage = ({ selected }) => {
    window.scrollTo(0, 0);
    setPageNumber(selected);
  };

  useEffect(() => {
    const allProducts = async () => {
      const products = await getAllProducts();

      dispatch(getProducts(products));
    };

    allProducts();
  }, []);

  return (
    <>
      <div className="grid grid-rows-2 grid-cols-3 gap-4 w-full">
        {Products.slice(pagesVisited, pagesVisited + ProductsPerPage).map(
          (product) => (
            <Product data={product} />
          )
        )}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationContainer"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
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
