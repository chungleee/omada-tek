import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>this is where user will login</h1>
      <Link to='/register'>Register</Link>
    </div>
  )
}

export default Login