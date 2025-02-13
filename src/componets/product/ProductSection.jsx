import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux';


const ProductSection = () => {
  const products = useSelector((state) => state.products.products);
  
    const { query } = useSelector((state) => state.search);
    const filteredProducts = query.trim()
        ? products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          )
        : products;

  return (
    <div className=' my-10 grid grid-cols-4 gap-10 px-20'>
      {filteredProducts ? (
        filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard
            key = {item._id}
            product = {item}
            title ={item.title}
            description ={item.description}
            images = {item.image}
            price = {item.price}
            oldPrice = {item.oldPrice}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found</p>
        )
      ) : (
        products.map((item)=>(
          <ProductCard 
          key = {item._id}
          product = {item}
          title ={item.title}
          description ={item.description}
          images = {item.image}
          price = {item.price}
          oldPrice = {item.oldPrice}
           />
        ))
      )}
    </div>
  )
}

export default ProductSection