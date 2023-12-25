import React from 'react'

interface Props {
	children?: React.ReactNode
	src: string
	cover: string
}

export default function Overview({ children, src, cover }: Props) {
	return (
		<div
			className={`h-screen ${src} relative bg-cover bg-center bg-no-repeat`}
		>
			<div
				className={`absolute left-0 top-0 h-full w-full ${cover} bg-cover bg-center bg-no-repeat opacity-40`}
			></div>
			{children}
		</div>
	)
}
