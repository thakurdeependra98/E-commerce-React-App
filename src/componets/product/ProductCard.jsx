import React from 'react'
import { FaHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { 
  addToCart, 
  addWishlist, 
  removeWishlist 
} from "../../store/reducers/productSlice";


const ProductCard = ({product, title, description, images, price, oldPrice}) => {

  // const cart = useSelector((state) => state.products.cart);
  const wishlist = useSelector((state) => state.products.wishlist);

  // const cartItem = cart.find((item) => item.id === product.id);
  
  const isWishlisted = wishlist.some((item) => item._id === product._id);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Add product to cart
    // navigate("/cart"); // Redirect to Cart Page
  };
  

  const handlerWishlist = () => {
    if (isWishlisted) {
      dispatch(removeWishlist(product._id)); // Remove from wishlist
      console.log(`Removed from wishlist: ${product.title}`);
    } else {
      dispatch(addWishlist(product)); // Add to wishlist    
      console.log(`Added to wishlist: ${product.title}`);
    }
  };


  return (
    <div className='w-[18vw] hover:scale-105 ease-in-out duration-400 h-auto shadow-2xl shadow-neutral-950/50 bg-white rounded-xl flex flex-col py-4 px-4'>
      <div className='w-full h-[18vw]  flex item-center justify-center'>
        <img className='h-full w-full object-cover hover:scale-105 ease-in-out duration-400' src={images} alt="" />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-[1.2vw] mt-4 font-semibold leading-5'>{title}</h1>
        <h5 className='text-[0.8vw] leading-3.5 text-zinc-600 mt-2'>{description}</h5>
        <div className='flex gap-3 items-center mt-2'>
          <h3 className='text-[1vw]'>$ {price}</h3>
          <h3 className='line-through text-zinc-500 text-[1vw]'>$ {oldPrice}</h3>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <button onClick={handleAddToCart} className='bg-blue-700 rounded text-white py-1 px-3'>Add to cart</button>
          <h2 onClick={handlerWishlist}>{isWishlisted ? (<FaHeart className='fill-red-500'/>) : (<IoIosHeartEmpty />)}</h2>
        </div>
      </div>
    </div>
  )
}

export default ProductCard