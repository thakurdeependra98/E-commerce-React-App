import React, { useEffect, useState } from 'react'
import logo from '../assests/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from "../store/reducers/authSlice";
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from './Search';

const Header = () => {
  // const [search, setSearch] = useState("");
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { cart, wishlist } = useSelector((state) => state.products);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <nav className='w-full flex items-center justify-between px-10 absolute'>
        <Link to="/"><img className='h-[10vw]' src={logo} alt="" /></Link>
        <div>
          <SearchBar/>
        </div>
        <div className='flex gap-8 mr-20 items-center'>
          {user && user.role === "buyer" ? (
            <div className='flex gap-8'>
              <Link to= "/cart"><h4 className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#4f4f4f] relative'>Cart {cart.length > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute -top-4 -right-4">
                      {cart.length}
                    </span>
                  )} </h4></Link>
              <Link to ='/wishlist' ><h4 className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#4f4f4f] relative'>Wishlist {wishlist.length > 0 && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute -top-4 -right-4">
                      {wishlist.length}
                    </span>
                  )} </h4></Link>
            </div>
        ): !user ? (
          <div className='flex gap-8'>
        <Link to= "/cart"><h4 className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#4f4f4f]'>Cart </h4></Link>
        <Link to ='/wishlist' ><h4 className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#4f4f4f]'>Wishlist </h4></Link>
        </div>
      ):
        ('')}
          {!isAuthenticated ? (<Link to= "/login"><h4 className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#ebebeb] bg-blue-700 px-3 py-1 rounded text-white'>Login</h4></Link> ): (<Link to= "/"><h4 onClick={handleLogout} className='flex items-center gap-2 text-[1.2vw] text-white font-normal hover:text-[#f1f1f1] bg-red-600 px-3 py-1 rounded'>Logout</h4></Link>)}
        </div>
      </nav>
    </>
  )
}

export default Header