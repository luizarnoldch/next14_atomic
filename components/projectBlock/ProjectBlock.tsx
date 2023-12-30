import React from 'react'

type Props = {
	children?: React.ReactNode
}

const projectBlock = (props: Props) => {
	return <div className='ml-[5%] h-screen'>{props.children}</div>
}

export default projectBlock
