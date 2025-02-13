import React from 'react'
import Header from './Header'
import ProductSection from './product/ProductSection'
import ProductSale from './product/ProductSale'

const Home = () => {
  return (
    <div className='w-screen min-h-screen pt-[8vw]'>
      <ProductSale/>
      <ProductSection/>
    </div>
  )
}

export default Home