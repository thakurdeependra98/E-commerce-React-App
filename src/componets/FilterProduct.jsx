import React from "react";
import { useSelector } from "react-redux";
import Search from "./Search";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);

  const { search } = useSelector((state) => state.search);
  const filteredProducts = query.trim()
      ? products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      : products;

  return (
    <div className="p-6">
      <Search /> Include search bar

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="p-4 border rounded-lg shadow">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md" />
              <h3 className="mt-2 font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
