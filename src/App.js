import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
	return (
		<Router>
			<div className='flex flex-column justify-center w-90 w-50-l vh-100' 
			style={{marginLeft:'auto', marginRight:'auto'}}
			>
				<Route exact path='/'>
					<Login />
				</Route>

				<Route path='/register'>
					<Register/>
				</Route>
			</div>
		</Router>
	)
}

export default App