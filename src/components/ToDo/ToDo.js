import React from 'react'
import './ToDo.css'
import Table from 'react-bootstrap/Table'; 
import { Container } from 'react-bootstrap';


export default function ToDo() {
	return (
		<section className="todo">
			<Container>
				<article className="p-5 text-center">
					<h1>ToDo</h1>
				</article>
				<Table striped bordered hover  className='p-3'>
					<thead>
						<tr>
							<th>Done</th>
							<th>To Do</th>
							<th>Category</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							
						</tr>
						<tr>
							
						</tr>
							
					</tbody>
				</Table>
			</Container>
		</section>
	)
}
