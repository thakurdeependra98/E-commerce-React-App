import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const cartItems = useSelector((state)=> state.cart.items)
  console.log(cartItems);
  
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist