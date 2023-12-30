import React from 'react'

type Props = {}

const ProjectCard = (props: Props) => {
	return (
		<div className='mx-auto flex h-[30%] min-h-[30%] w-4/5 flex-col justify-center lg:flex-row lg:items-center lg:space-x-4'>
			<header className='mb-16 mt-16 h-1/5 w-8/12 lg:w-6/12'>
				<h3 className='text-sm font-bold text-black opacity-40 lg:text-base'>
					Diseño Gráfico
				</h3>
				<h2 className='text-xl font-bold text-black opacity-80 sm:text-2xl lg:text-4xl'>
					Branding Timesless TI
				</h2>
			</header>
			<section className='w-10/12 sm:w-11/12 lg:w-6/12'>
				<p className='leading-8'>
					Una selección de Proyectos de Servicios Integrales:{' '}
					<strong>Diseño Gráfico</strong>,{' '}
					<strong>Diseño UX/UI</strong>,{' '}
					<strong>Desarrollo Web/Móvil</strong> y{' '}
					<strong>Marketing Digital</strong>
				</p>
			</section>
		</div>
	)
}

export default ProjectCard
