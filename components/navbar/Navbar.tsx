'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Navbar: React.FC = () => {
	const [isWidthSmall, setIsWidthSmall] = useState<boolean>(true)
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const [hasScrolled, setHasScrolled] = useState<boolean>(false)

	const handleScrollBackground = () => {
		setHasScrolled(window.scrollY > 1)
	}

	const handleResize = () => {
		setIsWidthSmall(checkWidth())
	}

	const checkWidth = () => window.innerWidth >= 1200
	useEffect(() => {
		setIsWidthSmall(checkWidth()) // Corregido para invocar la función checkWidth

		window.addEventListener('resize', handleResize)
		window.addEventListener('scroll', handleScrollBackground)

		// Limpieza al desmontar
		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('scroll', handleScrollBackground)
		}
	}, [])

	return isWidthSmall ? (
		<nav className='fixed z-20 flex h-screen w-[5%] min-w-[2rem] flex-col items-center justify-center bg-transparent'>
			<div className='absolute top-0 mt-24 rotate-90'>
				<Image src='/atomic.png' alt='Logo' width={150} height={150} />
			</div>
			<button
				className='hamburger-button flex h-12 w-[36px] flex-col items-center justify-center overflow-hidden opacity-40'
				onClick={() => setIsMenuOpen(!isMenuOpen)} // Cambiado para alternar el estado
			>
				<span className='block h-0.5 w-full bg-white'></span>
				<span className='my-1 block h-0.5 w-full bg-white'></span>
				<span className='block h-0.5 w-full bg-white'></span>
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
	) : (
		<nav
			className={`fixed z-20 flex h-[7%] w-full min-w-[2rem] flex-row items-center justify-between transition duration-300 ${
				hasScrolled ? 'nav-slide-down' : 'bg-transparent'
			}`}
		>
			<div className={`ml-16 bg-transparent`}>
				{hasScrolled ? (
					<div>
						<Image
							className=''
							src='/icon.png'
							alt='Logo'
							width={40}
							height={40}
						/>
					</div>
				) : (
					<Image
						src='/atomic.png'
						alt='Logo'
						width={100}
						height={100}
					/>
				)}
			</div>
			<button
				className='hamburger-button mr-8 flex h-12 w-[36px] flex-col items-center justify-center overflow-hidden opacity-40'
				onClick={() => setIsMenuOpen(!isMenuOpen)} // Cambiado para alternar el estado
			>
				<span
					className={`block h-0.5 w-full transition duration-300 ${
						hasScrolled ? ' bg-black' : 'bg-white'
					}`}
				></span>
				<span
					className={`my-1 block h-0.5 w-full transition duration-300 ${
						hasScrolled ? ' bg-black' : 'bg-white'
					}`}
				></span>
				<span
					className={`block h-0.5 w-full transition duration-300 ${
						hasScrolled ? ' bg-black' : 'bg-white'
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
