import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full h-[35px] bg-[#000000] text-[#FAFAFA] lg:flex sm:flex  lg:pl-[240px] lg:gap-[250px]'> 

    <div className='sm:pl-[110px] lg:h-[24px] sm:w-full lg:w-[750px]'>
      <p className='font-satoshi pt-2 lg:pl-32 lg:text-center sm:font-normal  sm:w-full sm:h-[18px] sm:text-left'>Sign up and get 20% off to your first.
      <span className='w-[68px] h-[24px] font-poppins underline font-semibold pl-2'>Sign Up Now</span>
      </p> 
    </div>

    <div className='sm:hidden lg:block mt-3'>
        <Image src={require('/public/Vector.png')} alt=''/>
    </div>
  </div>
  )
}

export default Header