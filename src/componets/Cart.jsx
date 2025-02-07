import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cartItems = useSelector((state)=> state.cart.items)
  console.log(cartItems);
  
  useSelector
  return (
    <>
      <div className= "w-screen h-screen flex items-center justify-center pt-24">
        <div className="w-[50vw] h-[70vh] bg-amber-500 px-[2vw] py-[1vw]">
          <h2 className = "text-[2vw] font-black">My Shopping cart</h2>
            {cartItems.length === 0 ? (
              <p>Your Cart is Empty</p>) : (
                <div>
                  {cartItems.map((item, index)=>(
                    <div key = {index} className = "w-full h-auto bg-gray-200 flex mb-5">
                      <div className='w-[15vw] h-[30vh]'>
                        <img className='h-full w-full object-cover' src={item.image} />
                      </div>
                      <div className=''>
                        <h1>{item.title}</h1>
                        <h1>{item.description}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              )
            }
        </div>
        <div className="w-[30vw] h-[70vh] bg-cyan-950"></div>
      </div>
    </>
  )
}

export default Cart