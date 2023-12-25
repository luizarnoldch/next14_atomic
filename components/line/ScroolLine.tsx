'use client'

import { useState, useEffect } from 'react'

const VerticalNav = () => {
	const [markerPosition, setMarkerPosition] = useState(0)
	const [isWidthSmall, setIsWidthSmall] = useState<boolean>(true)

	const handleScrollLine = () => {
		const newPosition =
			window.scrollY / (document.body.scrollHeight - window.innerHeight)
		setMarkerPosition(newPosition * 95)
	}

	const checkWidth = () => window.innerWidth >= 1200

	const handleResize = () => {
		setIsWidthSmall(checkWidth())
	}

	useEffect(() => {
		setIsWidthSmall(checkWidth())

		window.addEventListener('resize', handleResize)
		window.addEventListener('scroll', handleScrollLine)

		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('scroll', handleScrollLine)
		}
	}, [])

	return (
		isWidthSmall && (
			<div className='fixed z-10 ml-[5%] h-screen'>
				<div className='absolute left-0 h-full w-[1px] rounded-md bg-white opacity-30'></div>
				<div
					className='absolute left-0 h-[5rem] w-[1px] bg-white'
					style={{ top: `${markerPosition}%` }}
				></div>
			</div>
		)
	)
}

export default VerticalNav
