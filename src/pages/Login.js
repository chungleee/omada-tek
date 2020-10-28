import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div>
			<h1>Login</h1>

			<form className='mb3' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-column mb4'>
					<input
						className='ba input-reset mb1'
						ref={register({ required: true })}
						name='email'
						type='text'
						placeholder='Email'
					/>
					{errors.email && <span className='red'>Email field is required</span>}
				</div>

				<div className='flex flex-column mb4'>
					<input
						className='ba input-reset mb1'
						ref={register({ required: true })}
						name='password'
						type='password'
						placeholder='Password'
					/>
					{errors.password && (
						<span className='red'>Password field is required</span>
					)}
				</div>

				<input className='ba input-reset grow' type='submit' />
			</form>

			<Link to='/register'>Register</Link>
		</div>
	);
};

export default Login;
