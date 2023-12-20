'use client'

import { useState, useEffect } from 'react'

const VerticalNav = () => {
	const [markerPosition, setMarkerPosition] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const newPosition =
				window.scrollY /
				(document.body.scrollHeight - window.innerHeight)
			setMarkerPosition(newPosition * 100)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className='fixed z-10 ml-24 h-screen'>
			<div className='absolute left-0 h-full w-[1px] rounded-md bg-white opacity-30'></div>
			<div
				className='absolute left-0 h-[5rem] w-[1px] bg-white'
				style={{ top: `${markerPosition}%` }}
			></div>
		</div>
	)
}

export default VerticalNav
