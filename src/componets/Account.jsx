import React from 'react'
import Signup from './Signup'
import SignUpPage from './Signup'
import LoginPage from './Login'

const Account = () => {

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-[70vw] h-[80vh] flex gap-[10vw] '>
        <div className='w-[15vw] h-full text-center pt-10'>
          <h2 className='text-[2vw] font-semibold mb-10'>Please Select !</h2>
          <div className='flex flex-col gap-4'>
            <h3 className='text-[1.5vw]  rounded bg-zinc-200'>Buyer</h3>
            <h3 className='text-[1.5vw]  rounded hover:bg-zinc-200'>Seller</h3>
            <h3 className='text-[1.5vw]  rounded hover:bg-zinc-200'>Admin</h3>
          </div>
        </div>
        <div className='mt-10'>
          <div className='mb-5'>
            <button  className='text-[2vw] font-medium'>Signup/ </button>
            <button className='text-[2vw] font-medium'> Login</button>
          </div>
          <Signup/>
        </div>
    </div>
    </div>
  )
}

export default Account