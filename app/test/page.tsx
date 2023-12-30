import React from 'react'

const HoverImageZoom: React.FC = () => {
	return (
		<div className='flex h-screen w-screen items-center justify-center bg-black'>
			<div className='component bg-white'>
				<div className='imageWrapper'>
					{/* Aquí se podría agregar contenido adicional si es necesario */}
				</div>
				<div className='overlay'>
					{/* Contenido adicional para el overlay si es necesario */}
				</div>
			</div>
		</div>
	)
}

export default HoverImageZoom
