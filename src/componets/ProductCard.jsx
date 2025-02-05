import React from 'react'

const ProductCard = () => {
  return (
    <div className='w-[20vw] h-[45vh] border rounded-xl flex flex-col items-center py-5 px-4'>
      <img className='w-[12vw]' src="https://img.lovepik.com/element/45007/9562.png_860.png" alt="" />
      <h1 className='text-[1.8vw] my-3'>Puma T-shirt</h1>
      <h5 className='text-[0.9vw] leading-4 text-zinc-700'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</h5>
      <h3>&#8377; 255</h3>
    </div>
  )
}

export default ProductCard