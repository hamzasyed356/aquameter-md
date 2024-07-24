import Image from 'next/image'
import React from 'react'
import nust from '../../public/nust-logo.png'
import resurgence from '../../public/resurgence_logo.png'

const Topbar = () => {
  return (
    <div className='flex items-center justify-between align-middle content-center my-4 mx-10'>
      <div>
        <Image src={nust} alt={''} height={80}/>
      </div>
      <h1 className='font-bold text-center text-5xl'>Membrane Distillation</h1>
      <div>
        <Image src={resurgence} alt={''} height={40}/>
      </div>
    </div>
  )
}

export default Topbar