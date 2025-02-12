import React, { useEffect, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../store/reducers/authSlice'
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {user, isAuthenticated, error} = useSelector((state) => state.auth);

  const handlerLogin = (formData) => {
    dispatch(login({ email: formData.email }));
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === "buyer") navigate("/buyer");
      if (user.role === "seller") navigate("/seller");
      if (user.role === "admin") navigate("/admin");
    }
  }, [isAuthenticated, user, navigate]);
    

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gap-10'>
      <div className='w-[23vw] border py-8 px-5 rounded-lg shadow-lg shadow-zinc-900/50 bg-white'>
        <div>
          <h1 className='text-3xl font-medium'>Login</h1>
          {error && <p className="text-red-500">{error}</p>}
          <h1 className='text-lg font-normal mt-6 text-zinc-500 leading-5'>
            Welcome Back! Please login to your account
          </h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(handlerLogin)}
            className='flex flex-col w-[24vw] h-auto rounded-lg mt-10'
          >
            <label className='text-zinc-500 mb-3'>
              <span className='text-red-600'>*</span> Email:
              <br />
              <input
                className='border rounded px-2 w-[84%] outline-0 text-black'
                type='email'
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </label>

            <label className='text-zinc-500 mb-3'>
              <span className='text-red-600'>*</span> Password:
              <br />
              <input
                className='border rounded px-2 w-[84%] outline-0'
                type='password'
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </label>
            <br />

            <div className='flex gap-4'>
              <button className='w-[84%] py-1 px-6 text-white rounded bg-blue-600'>
                LogIn
              </button>
            </div>

            <div className='flex gap-1 mt-10'>
              <h1 className='text-md text-zinc-500'>New User?</h1>
              <Link to='/signup'>
                <h1 className='text-blue-600'>Sign up</h1>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

};
export default LoginPage;
