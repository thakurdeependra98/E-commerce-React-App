import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";

const ProductCard = ({title, description, images, price}) => {
  return (
    <div className='w-[18vw] hover:scale-105 ease-in-out duration-400 h-auto shadow-2xl shadow-neutral-950/50 bg-white rounded-xl flex flex-col py-6 px-4'>
      <div className='w-full h-[15vw] bg-contain flex item-center justify-center'>
        <img className='h-full bg-contain' src={images} alt="" />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-[1.2vw] mt-4 font-semibold leading-5'>{title}</h1>
        <h5 className='text-[0.8vw] leading-3.5 text-zinc-600 mt-2'>{description}</h5>
        <h3>$ {price}</h3>
        <div className='flex justify-between items-center mt-4'>
          <button className='bg-blue-700 rounded text-white py-1 px-3'>Add to cart</button>
          <h2><IoMdHeartEmpty /></h2>
        </div>
      </div>
    </div>
  )
}

export default ProductCard