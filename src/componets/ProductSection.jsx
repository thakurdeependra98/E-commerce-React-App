import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux';
import FilterProduct from './FilterProduct'


const ProductSection = () => {
  const products = useSelector((state) => state.products.products);
  const searchItems = useSelector((state)=> state.search.search)

  return (
    <div className=' my-10 grid grid-cols-4 gap-10 px-20'>
      {searchItems ? (
        <FilterProduct/>
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