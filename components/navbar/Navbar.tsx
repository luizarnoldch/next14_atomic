'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const [hasScrolled, setHasScrolled] = useState<boolean>(false)

	const handleScrollBackground = () => {
		setHasScrolled(window.scrollY > 1)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScrollBackground)

		// Limpieza al desmontar
		return () => {
			window.removeEventListener('scroll', handleScrollBackground)
		}
	}, [])

	return (
		<nav
			className={`fixed z-20 flex h-[7%] w-full flex-row items-center justify-between bg-transparent transition duration-300 lg:h-screen lg:w-[5%] lg:min-w-[2rem] lg:flex-col lg:justify-center ${
				hasScrolled
					? 'nav-slide-down lg:animate-none lg:bg-transparent'
					: 'bg-transparent'
			}`}
		>
			<div className='ml-8 bg-transparent lg:absolute lg:top-0 lg:ml-0 lg:mt-24 lg:rotate-90'>
				{hasScrolled ? (
					<Image
						className='lg:-rotate-90'
						src='/icon.png'
						alt='Logo'
						width={40}
						height={40}
					/>
				) : (
					<Image
						src='/atomic.png'
						alt='Logo'
						width={150}
						height={150}
					/>
				)}
			</div>
			<button
				className='hamburger-button mr-8 flex h-12 w-[36px] flex-col items-center justify-center overflow-hidden opacity-40 lg:mr-0'
				onClick={() => setIsMenuOpen(!isMenuOpen)} // Cambiado para alternar el estado
			>
				<span
					className={`block h-0.5 w-full transition duration-300 ${
						hasScrolled ? ' bg-black lg:bg-white' : 'bg-white'
					}`}
				></span>
				<span
					className={`my-1 block h-0.5 w-full transition duration-300 ${
						hasScrolled ? ' bg-black lg:bg-white' : 'bg-white'
					}`}
				></span>
				<span
					className={`block h-0.5 w-full transition duration-300 ${
						hasScrolled ? ' bg-black lg:bg-white' : 'bg-white'
					}`}
				></span>
			</button>
			<div
				className={`fixed left-0 top-0 z-10 h-full w-full bg-black ${
					isMenuOpen ? 'menu-transition-in' : 'menu-transition-out'
				} ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<button
					className='absolute right-5 top-5'
					onClick={() => setIsMenuOpen(false)}
				>
					<span className='block h-0.5 w-6 rotate-45 bg-white'></span>
					<span className='block h-0.5 w-6 -rotate-45 bg-white'></span>
				</button>
				<div className='text-white'>Navegación</div>
			</div>
		</nav>
	)
}

export default Navbar
