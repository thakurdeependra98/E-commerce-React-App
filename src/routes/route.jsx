import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../componets/Home'
import Cart from '../componets/Cart'
import Wishlist from '../componets/Wishlist'
import Account from '../componets/Profile'
import SignUpPage from '../componets/Signup'
import LoginPage from '../componets/Login'
import Header from '../componets/Header'
import Buyer from '../componets/users/Buyer'
import Seller from '../componets/users/Seller'
import Admin from '../componets/users/Admin'
import PrivateRoute from './PrivateRoutes'

const route = () => {

  const [isAuth, setIsAuth] = useState(false)

  const logoutHandler = () =>{
    setIsAuth(false)
  }

  return (
    <>
      <BrowserRouter>
        <Header isAuth = {isAuth} logoutHandler = {logoutHandler}/>
        <Routes>
          <Route path='/'element = {<Home/>} ></Route>
          <Route path='/cart'element = {<PrivateRoute><Cart/></PrivateRoute>} ></Route>
          <Route path='/wishlist'element = {<PrivateRoute><Wishlist/></PrivateRoute>} ></Route>
          <Route path='/account'element = {<Account/>} ></Route>
          <Route path='/buyer'element = {<PrivateRoute role = "buyer"><Buyer/></PrivateRoute>} ></Route>
          <Route path='/seller'element = {<PrivateRoute role = "seller"><Seller/></PrivateRoute>} ></Route>
          <Route path='/admin'element = {<PrivateRoute role = "admin"><Admin/></PrivateRoute>} ></Route>
          <Route path='/login'element = {<LoginPage/>} ></Route>
          <Route path='/signup'element = {<SignUpPage/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default route