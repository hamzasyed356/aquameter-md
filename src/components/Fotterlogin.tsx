import React from 'react'
import Image from 'next/image'
import Logo from '../../public/company-logo.png'
import Link from 'next/link'

const Fotterlogin = () => {
  return (
    <div className='flex justify-between align-middle content-center text-center w-full px-20 py-2 border-t-2 bg-white'>
    <h3 className='font-normal text-xs'>All rights reserved © 2024</h3>
    <div className='flex align-middle'>
    <h3 className='font-normal text-xs'>Designed and developed by : </h3>
    <Link href={'https://www.pentaprismtechnologies.com'}>
    <Image src={Logo} alt={'Logo Pentaprism Technologies'} className='w-[120px] h-6'/>
    </Link>
    </div>
  </div>
  )
}

export default Fotterlogin