import React from 'react'
import './Navigation.css'
import Container from 'react-bootstrap/Container'
import {Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'




export default function Navigation() {
	return (
		<Navbar expand="md" className="navbar p-4">
			<Container>
				<Navbar.Brand href="/">ToDo App</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse >
					<Nav>
						<Link to='/' className='nav-link'>Home</Link>
						<Link to='/todo' className='nav-link'>ToDo</Link>
						<Link to='/categories' className='nav-link'>Categories</Link>
						<Nav.Link href="">Login</Nav.Link>
						{/* TODO: update */}
						
					</Nav>
				</Navbar.Collapse>

				<Navbar.Collapse className="justify-content-end">
					{/* TODO: insert username: AUTH */}
					<Navbar.Text>
						Signed in as: {} 
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
    		</Navbar>
	)
}
