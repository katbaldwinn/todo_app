import React from 'react'
import './Footer.css'

export default function Footer() {
	return (
		<article className='p-5 text-white text-center footer'> 
			<strong>&copy; {new Date().getFullYear()} Mary Kate Baldwin, All Rights Reserved</strong>
		</article>
	)
}
