import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
const Register = () => {
  const {register, handleSubmit, errors} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-column mb4'>
          <input className='ba input-reset mb1' ref={register({ required: true })} name='email' type="email" placeholder='Email'/>
          {errors.email && <span className='red'>Password field is required</span>}
        </div>

        <div className='flex flex-column mb4'>
          <input className='ba input-reset mb1' ref={register({ required: true })} name='password' type="password" placeholder='Password'/>
          {errors.password && <span className='red'>Password field is required</span>}
        </div>

        <div className='flex flex-column mb4'>
          <input className='ba input-reset mb1' ref={register({ required: true })} name='confirm_password' type="password" placeholder='Confirm password'/>
          {errors.confirm_password && <span className='red'>Password field is required</span>}
        </div>

        <input type="submit"/>
      </form>

      <Link to='/'>Login</Link>
    </div>
  )
}

export default Register