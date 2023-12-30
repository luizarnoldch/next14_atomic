import Overview from '@/components/overview/Overview'
import ProjectBlock from '@/components/projectBlock/ProjectBlock'
import ProjectCard from '@/components/projectCard/ProjectCard'
import VerticalLine from '@/components/verticalLine/VerticalLine'

export default function Home() {
	return (
		<main className='w-full'>
			{/* First Page: Title */}
			<Overview src='bg-landing-image-1 pl-[5%]' cover='bg-[#323941]'>
				<div className='mx-auto flex h-screen w-4/5 flex-col justify-around'>
					<section className='my-auto w-9/12'>
						<h3 className='text-sm font-bold text-white opacity-70 lg:text-xl'>
							Hola, somos Atomic
						</h3>
						<h1 className='text-2xl font-bold text-white opacity-80 sm:text-4xl lg:text-7xl'>
							Transformamos ideas en experiencias visuales
							memorables.
						</h1>
					</section>
					<footer className='flex h-[3.5%] w-[40%] flex-row space-x-4 lg:w-[20%]'>
						<VerticalLine />
						<h3 className='text-xs font-bold text-white opacity-70'>
							Mira nuestro trabajo
						</h3>
					</footer>
				</div>
			</Overview>
			<ProjectBlock>
				<div className='mx-auto flex h-2/5 min-h-[40%] w-4/5 flex-col justify-center lg:flex-row lg:items-center lg:space-x-4'>
					<header className='mb-16 mt-16 h-1/5 w-8/12 lg:w-6/12'>
						<h2 className='text-2xl font-bold text-black opacity-80 sm:text-3xl lg:text-5xl'>
							Proyectos
						</h2>
						<h2 className='text-2xl font-bold text-black opacity-80 sm:text-3xl lg:text-5xl'>
							Seleccionados
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
				
				<ProjectCard />
				

				<div className='mx-auto flex h-[30%] min-h-[30%] w-4/5 flex-col justify-center lg:flex-row lg:items-center lg:space-x-4'>
					<header className='mb-16 mt-16 h-1/5 w-8/12 lg:w-6/12'>
						<h3 className='text-sm font-bold text-black opacity-40 lg:text-base'>
							Desarrollo Web
						</h3>
						<h2 className='text-xl font-bold text-black opacity-80 sm:text-2xl lg:text-4xl'>
							Don Juan
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
			</ProjectBlock>
		</main>
	)
}
