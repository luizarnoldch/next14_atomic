import Navbar from '@/components/navbar/Navbar'
import ScroolLine from '@/components/line/ScroolLine'

export default function Home() {
	return (
		<main className=' h-full w-full'>
			{/* First Page: Title */}
			<div className='h-screen bg-landing-image-1 bg-cover bg-center bg-no-repeat'>
				<div className='absolute left-0 top-0 h-full w-full bg-[#323941] bg-cover bg-center bg-no-repeat opacity-40'></div>
				<div className='font-inter relative ml-28 flex h-full flex-col items-center justify-between'>
					<div className='mt-8'></div>
					<header className='container ml-24 space-y-4 text-start text-white'>
						<h5 className='font-bold'>HOLA, SOMOS ATOMIC</h5>
						<h1 className='w-6/8 font-bold'>
							<span>
								Transformamos ideas en experiencias visuales
							</span>
							<br />
							<span>memorables</span>
						</h1>
					</header>
					<div className='container ml-28 flex space-x-8 text-start text-white'>
						<div className='line-footer relative mb-[4rem]'>
							<div className='absolute left-0 h-[4rem] w-[1px] rounded-md bg-white opacity-30'></div>
							<div className='absolute left-0 h-[1rem] w-[1px] bg-white'></div>
						</div>
						<h5 className='font-bold'>MIRA NUESTRO TRABAJO</h5>
					</div>
				</div>
			</div>
			{/* Second Page: Proyects and information */}
			<div className='h-1/3 w-full bg-transparent'>
				<div className='ml-24 flex h-full items-center justify-center border-[1px] border-b-black bg-white'>
					{/* Columna Izquierda */}
					<div className='flex h-full w-1/2 items-center justify-center'>
						<h2 className='w-2/3 text-start'>
							Proyectos Seleccionados
						</h2>
					</div>

					{/* Columna Derecha */}
					<div className='flex h-full w-1/2 items-center justify-center font-bold'>
						<h4 className='w-5/6'>
							Una selección de proyectos de Servicios integrales:
							Diseño Gráfico, Diseño UX/UI, Desarrollo Web/Móvil y
							Marketing Digital
						</h4>
					</div>
				</div>
			</div>
			<div className='h-1/3 w-full bg-transparent'>
				<div className='ml-24 h-full bg-white text-black'>2/3</div>
			</div>
			<div className='h-1/3 w-full  bg-transparent '>
				<div className='ml-24 h-full border-[1px] border-t-black bg-white text-black'>
					3/3
				</div>
			</div>
			<div className='h-screen bg-white bg-cover bg-center bg-no-repeat'>
				<div className='ml-28 text-white'>Texto</div>
			</div>
			<div className='h-screen bg-landing-image-2 bg-cover bg-center bg-no-repeat'>
				<div className='ml-28 text-white'>Texto</div>
			</div>
			<div className='h-screen bg-landing-image-3 bg-cover bg-center bg-no-repeat'>
				<div className='ml-28 text-white'>Texto</div>
			</div>
		</main>
	)
}
