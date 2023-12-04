import React from 'react'
import './Categories.css'
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';


export default function Categories() {
	return (
		<section className="categories">
			<Container>
				<br />
				<h1 className="text-center p-4 col-md-6" id='todoh1'>Categories</h1>
				<Table striped hover col-md-6 className='table'>
					<thead>
						<tr>
							<th>Id</th>
							<th>Category Name</th>
							<th>Category Description</th>
				
						</tr>
					</thead>
					<tbody>
						<tr>
							<td></td>
							<td></td>
							<td></td>
				
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
				
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</Table>
			</Container>
		</section>
	)
}
