import Overview from '@/components/imageBackground/ImageBackground'
import VerticalLine from '@/components/verticalLine/VerticalLine'

export default function Home() {
	return (
		<main className='w-full'>
			{/* First Page: Title */}
			<Overview src='bg-landing-image-1 pl-[5%]' cover='bg-[#323941]'>
				<div className='w-4/5 mx-auto h-screen flex flex-col justify-around'>
					<section className='w-9/12 my-auto'>
						<h3 className='text-sm lg:text-xl text-white font-bold opacity-70'>
							Hola, somos Atomic
						</h3>
						<h1 className='text-2xl sm:text-4xl lg:text-7xl text-white font-bold opacity-80'>
							Transformamos ideas en experiencias visuales memorables.
						</h1>
					</section>
					<footer className='h-[3.5%] w-[40%] lg:w-[20%] flex flex-row space-x-4'>
						<VerticalLine />
						<h3 className='text-xs text-white font-bold opacity-70'>
							Mira nuestro trabajo
						</h3>
					</footer>
				</div>
			</Overview>
			<Overview src='bg-landing-image-2' cover='bg-[#323941]'></Overview>
		</main>
	)
}
