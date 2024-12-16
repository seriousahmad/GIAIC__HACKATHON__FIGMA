import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar2 = () => {
  return (
<>
    <div className='sm:w-[450px] sm:h-[95px] sm:flex sm:gap-[350px]'>

        <div className='sm:flex sm:align-center sm:w-[50%] sm:gap-3'>
            <Image className='sm:mt-[10px] h-8' src={require('/public/menu-regular-24.png')} alt=''/>
            <div>
                <h1 className='font-black sm:text-[38px]'><Link href='/'>SHOP.CO</Link></h1>
            </div>
        </div>


        <div className='sm:flex sm:gap-3 sm:mt-[-10px] sm:w-[50%]'>
        
            <Image className='sm:mt-[33px] h-5' src={require('/public/Vector (2).png')} alt=''/>
            <Link className='sm:pointer' href="../cart"><Image className='h-6 mt-[30px]' src={require('/public/Frame (6).png')} alt=''/></Link>
            <Image className='h-6 mt-[30px]' src={require('/public/Frame (7).png')} alt=''/>
            
        </div>

    </div>
</>
    
  )
}

export default Navbar2