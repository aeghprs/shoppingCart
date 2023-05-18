import { useSelector } from "react-redux";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export const CategoriesChart = () => {
  const Products = useSelector((state) => state.cart.products);

  const categories = [
    ...new Set(
      Products.map(function (el) {
        return el.category;
      })
    ),
  ];

  const ChartData = [];

  categories.forEach((categories) => {
    ChartData.push({
      name: categories,
      values: Products.filter((catData) => catData.category == categories)
        .length,
    });
  });

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center items-center flex-col bg-white rounded-lg">
          <div className="mt-24 text-center text-5xl">
            <h1>Categories chart</h1>
          </div>
          <div className="barChart mt-2">
            <BarChart width={750} height={350} data={ChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={false} />
              <Bar dataKey="values" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
};
