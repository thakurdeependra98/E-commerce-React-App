import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux';


const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortOrder, setSortOrder] = useState("")
  const products = useSelector((state) => state.products.products);
  // console.log(products?.category);
  
  
    const { query } = useSelector((state) => state.search);
    const filteredProducts = query.trim()
        ? products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          )
        : products;
    
    let categoriesProduct = selectedCategory === "all" ? [...products] : products.filter((product)=> product.category === selectedCategory)
    console.log(categoriesProduct);
    
  if (sortOrder === "lowToHigh") {
    categoriesProduct.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    categoriesProduct.sort((a, b) => b.price - a.price);
  }
     
  return (
    <>
      <div className='w-screen flex items-center justify-between bg-white py-[1vh] px-[6vw] mt-[5vh]  '>
        <div className='flex gap-[5vw] font-normal text-red-700'>
          <h2 className='tracking-[5px]' onClick={() => setSelectedCategory("all")} >ALL PRODUCTS</h2>
          <h2 className='tracking-[5px]' onClick={() => setSelectedCategory("men")} >MEN</h2>
          <h2 className='tracking-[5px]' onClick={() => setSelectedCategory("women")} >WOMEN</h2>
          <h2 className='tracking-[5px]' onClick={() => setSelectedCategory("kids")} >KIDS</h2>
          <h2 className='tracking-[5px]'>NEW ARRIVALS</h2>
        </div>
        <div>
          <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
              <option value="">Sort By Price</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
      <div className=' my-10 grid grid-cols-4 gap-10 px-20'>
        {categoriesProduct.length > 0 ? (
          categoriesProduct.map((item)=> (
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
        ): (
          filteredProducts ? (
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
          ) :  (products.map((item)=>(
            <ProductCard 
            key = {item._id}
            product = {item}
            title ={item.title}
            description ={item.description}
            images = {item.image}
            price = {item.price}
            oldPrice = {item.oldPrice}
             />
          )) )
        )}
    </div>
    </>
  )
}

export default ProductSection