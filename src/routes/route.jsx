import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../componets/Home'
import Cart from '../componets/Cart'
import Wishlist from '../componets/Wishlist'
import Account from '../componets/Profile'
import SignUpPage from '../componets/Signup'
import LoginPage from '../componets/Login'
import Header from '../componets/Header'

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
          <Route path='/cart'element = {<Cart/>} ></Route>
          <Route path='/wishlist'element = {<Wishlist/>} ></Route>
          <Route path='/account'element = {<Account/>} ></Route>
          <Route path='/login'element = {<LoginPage setIsAuth = {setIsAuth} />} ></Route>
          <Route path='/signup'element = {<SignUpPage setIsAuth = {setIsAuth}/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default route