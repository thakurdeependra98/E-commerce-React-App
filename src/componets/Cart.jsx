import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";


const Cart = () => {

  const cartItems = useSelector((state)=> state.cart.items)
  const navigate = useNavigate()
  // console.log(cartItems);
  
  const shopNow = () =>{
    navigate("/")
  }

  return (
    <>
      <div className= "w-screen h-screen pt-24 overflow-auto">
        <h2 className = "text-[2vw] font-normal ml-20 mt-[5vh] mb-[1vh]">My Shopping cart({cartItems.length})</h2>
        <div className='w-[88vw] h-auto flex items-center justify-between mx-[5vw] bg-white'>
          <div className="w-[60vw] h-full px-[2vw] py-[1vw] ">
              {cartItems.length === 0 ? (
                <div className='w-full h-full flex flex-col justify-center items-center flex-wrap'>
                  <p className='text-[1.8vw] text-red-700'>Your Cart is Empty</p>
                  <button onClick={shopNow} className='bg-blue-700 px-3 rounded py-1 mt-3 text-white text-[1.2vw]'>Shop Now</button>
                </div> ) : (
                  <div>
                    {cartItems.map((item, index)=>(
                      <div key = {index} className = "w-full h-auto bg-cyan-100 flex mb-5 rounded">
                        <div className='w-[15vw] h-[30vh] '>
                          <img className='h-full w-full object-cover rounded' src={item.image} />
                        </div>
                        <div className='w-[45vw] px-5 py-3 flex justify-between flex-col'>
                          <div className='mt-2'>
                            <h1 className='text-[1.5vw] font-semibold'>{item.title}</h1>
                            <h1 className='text-[0.9vw] text-zinc-600 font-normal'>{item.description}</h1>
                          </div>
                          <div>
                            <h3 className='mb-2 text-[1.3vw]'>Quantity</h3>
                            <h3 className='flex flex-row gap-3 text-[1.5vw] items-center'>- <button className='px-5 py-1 bg-white text-[1.1vw] rounded'>1</button> +</h3>
                          </div>
                          <div className='w-full flex justify-between '>
                            <div className='flex gap-4 items-center'>
                              <h3 className='text-[1.2vw]'> ${item.price}</h3>
                              <h3 className='line-through text-zinc-500 text-[1vw]'> ${item.oldPrice}</h3>
                            </div>
                            <div className='flex items-center gap-8'>
                              <h3 className='text-[1.2vw] text-zinc-500 flex gap-2 items-center'><IoMdHeartEmpty /> Move To Wishlist</h3>
                              <h3 className='text-[1.2vw] text-zinc-500 flex gap-2 items-center'><AiOutlineDelete /> Remove</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              }
          </div>
          <div className="w-[25vw] h-full bg-cyan-950"></div>
        </div>
      </div>
    </>
  )
}

export default Cart