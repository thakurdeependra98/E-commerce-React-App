import React from 'react'
import Header from './Header'
import ProductSection from './product/ProductSection'
import ProductSale from './product/ProductSale'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='w-screen min-h-screen pt-[8vw]'>
      <ProductSale/>
      <ProductSection/>
      <Footer/>
    </div>
  )
}

export default Home