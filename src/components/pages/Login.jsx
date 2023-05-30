import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginIn, logOut } from '../../store/slices/loginUser.slice'
import { Link } from 'react-router-dom'

const DEFAULT_VALUES = {
  user: "",
  password: ""
}

const Login = () => {
  const {register, handleSubmit, reset} = useForm()
  const {user} = useSelector(store => store.loginUserSlice)

  const { isLoggedIn } = useSelector(store => store.loginUserSlice)
  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(loginIn(data))
    reset(DEFAULT_VALUES)
  }

  const handleClickLogOut = () => {
    dispatch(logOut())
  }
  return (
    <section className="h-screen w-full flex justify-center items-center">
      {
        isLoggedIn ? (
          <section className="text-center grid justify-center items-center">
              <div className="w-[130px] rounded-full border-[5px] mb-5 mx-auto">
                <img className="w-full h-full object-contain aspect-square rounded-full" src="/public/images/perfil.jpg" alt="" />
              </div>
              <h1 className="my-2">Bienvenido <span className='text-lg font-semibold'>{user}</span></h1>
              <div className='grid-cols-2 grid gap-3'>
                <Link to={"/"}><button className="px-7 text-white py-2 bg-red-500 rounded-md">Continuar</button></Link>
                <button onClick={handleClickLogOut} className="px-7 text-white py-2 bg-red-500 rounded-md">Salir</button>
              </div>
          </section>
        ):(
          <>
          <div className='absolute w-[100%] h-[100%] z-10'>
                  <img className='w-full h-full object-cover opacity-25' src="/public/images/bg-mesaju.jpg" alt="" />
                </div>
                <form onSubmit={handleSubmit(submit)} className='z-40 shadow-xl border-[1px] grid gap-5 bg-slate-100 p-7 w-[300px] rounded-md'>
                  <div className='text-center py-2 mx-auto w-[200px] h-[300px]'>
                    <img className='mx-auto w-full h-full object-contain' src="/public/images/mesaju.png" alt="" />
                  </div>
                  <div className='grid gap-2'>
                    <label className='text-lg font-semibold' htmlFor="user">User</label>
                    <input id='user' {...register("user", {required: true})} className='rounded-md px-4 py-2' type="text" />
                  </div>
                  <div className='grid gap-2'>
                    <label className='text-lg font-semibold' htmlFor="password">Password</label>
                    <input id='password' {...register('password', {required: true})} className='rounded-md px-4 py-2' type="password" />
                  </div>
                  <button className='bg-blue-500 py-2 rounded-md text-white font-semibold mt-5 w-full'>Login</button>
                </form>
          </>
        )
      }
    </section>
  )
}

export default Login