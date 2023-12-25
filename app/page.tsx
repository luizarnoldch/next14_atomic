import Overview from '@/components/imageBackground/ImageBackground'
import Navbar from '@/components/navbar/Navbar'

export default function Home() {
	return (
		<main className='w-full'>
			{/* First Page: Title */}
			<Overview src='bg-landing-image-1' cover='bg-[#323941]'></Overview>
			<Overview src='bg-landing-image-2' cover='bg-[#323941]'></Overview>
		</main>
	)
}
