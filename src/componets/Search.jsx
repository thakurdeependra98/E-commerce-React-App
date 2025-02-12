import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setFilteredProducts } from "../store/reducers/SearchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.products);

  const handleSearch = (query) => {
    dispatch(setQuery(query)); // Update search term in Redux

    // Filter products instantly
    // const filtered = query.trim()
    //   ? products.filter((product) =>
    //       product.title.toLowerCase().includes(query.toLowerCase())
    //     )
    //   : products;

    // dispatch(setFilteredProducts(filtered)); // Store filtered products in Redux
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => handleSearch(e.target.value)}
      className="w-[30vw] bg-white px-5 py-2 outline-0 rounded-full"
    />
    // <input className='w-[30vw] bg-white px-5 py-2 outline-0 rounded-full' type = "search"  placeholder='Search for products and more'/>
  );
};

export default SearchBar;
