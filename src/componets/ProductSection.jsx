import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import data from '../utils/data.json'
import { useDispatch } from 'react-redux'

const ProductSection = () => {

  return (
    <div className=' my-10 grid grid-cols-4 gap-10 px-20'>
      {data.products.map((item)=>(
        <ProductCard 
        key = {item.id}
        item = {item}
        title ={item.title}
        description ={item.description}
        images = {item.image}
        price = {item.price}
         />
      ))}
    </div>
  )
}

export default ProductSection