import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
	return (
		<Router>
			<Route exact path='/'>
				<Login />
			</Route>

			<Route path='/register'>
				<Register/>
			</Route>
		</Router>
	)
}

export default App