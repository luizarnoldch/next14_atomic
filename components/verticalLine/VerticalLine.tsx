import React from 'react'

type Props = {}

const VerticalLine = (props: Props) => {
  return (
    <div className='relative h-full w-[1px] overflow-y-hidden'>
        <div className='h-full w-[1px] rounded-md bg-white opacity-30'></div>
        <div
            className='vertical-spin h-[3rem] w-[1px] bg-white absolute'
        ></div>
    </div>
  )
}

export default VerticalLine