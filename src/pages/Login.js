import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Login = () => {
  const {register, handleSubmit, watch, errors} = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} name='email' type="text" placeholder='Email'/>
        <input ref={register({required:true})} name='password' type="password" placeholder='Password'/>
        {errors.password && <span>Password field is required</span>}
        <input type="submit"/>
      </form>
      <Link to='/register'>Register</Link>
    </div>
  )
}

export default Login