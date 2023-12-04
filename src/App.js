import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Categories from './components/Categories/Categories'
import ToDo from './components/ToDo/ToDo'
import Footer from './components/Footer'

export default function App() {
	return (
	<div className="app">
		<Router>
		<Navigation/>
			<Routes>
				{/* Routes is like a switch that defines each individual Route. */}
				<Route path='/' element={<ToDo/>}/>
				<Route path='/todo' element={<ToDo/>}/>
				<Route path='/categories' element={<Categories/>}/>
				{/* // <Route path='/resources' element={<ProtectedRoute><Resources/></ProtectedRoute>}/> */}
				{/* <Route path='/login' element={<Login/>}/> */}
				{/* <Route path='*' element={<NotFound/>}/> */}
			</Routes>
			<Footer/>
		</Router>
	</div>
	)
}
