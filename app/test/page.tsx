type Props = {}
export default function page({}: Props) {
	return (
		<div className='w-full h-screen bg-black flex justify-center items-center'>
			<div className='w-1/2 h-1/2 bg-white flex justify-center items-center'>
				<div className='bg-black w-1/2 h-full flex justify-center items-center relative'>
					{/* Overflow container for the white line */}
					<div className='relative w-1 h-full overflow-hidden'>
						{/* White line */}
						<div className='bg-white w-1 h-full absolute'></div>
						{/* Red line */}
						<div className='bg-red-500 w-1 h-80 absolute vertical-spin'></div>
					</div>
				</div>
			</div>
		</div>
	)
}
