import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/reducers/productSlice";
import ProductCard from "./ProductCard";

const ProductAdd = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState([])
  const user = useSelector((state) => state.auth.user);

  // Show form only for sellers
  if (!user || user.role !== "seller") return null;

  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    description : "",
    oldPrice : "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setItem([...item, product])
    setProduct({ title: "", price: "", image: "", description:"", oldPrice:"" });
  };

  return (
    <div className="w-screen flex items-center justify-center flex-col min-h-screen pt-[8vw]">
      <div className="w-screen p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Product Name"
          value={product.title}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={product.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="oldPrice"
          placeholder="Old Price"
          value={product.oldPrice}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
          Add Product
        </button>
      </form>
      </div>
      <div className="w-screen px-[5vw] py-[5vh] grid grid-cols-4 gap-10">
        {item.map((item)=>(
          <ProductCard
          key = {item.id}
          product = {item}
          title ={item.title}
          description ={item.description}
          images = {item.image}
          price = {item.price}
          oldPrice = {item.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductAdd;
