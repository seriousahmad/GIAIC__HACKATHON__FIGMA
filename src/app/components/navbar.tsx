import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <> 
  <div>
    <div className='pb-5 w-full h-[95px] flex justify-between items-center px-[95px] border-[#0000001A] border-b-2 gap-[50px]'>

      <div className='w-[15%]'>
        <h1 className='font-black mt-7 text-[38px] text-2xl'><Link href='/'>SHOP.CO</Link></h1>
      </div>
      
      <div className='w-[35%]'>     
        <ul className='text-[17px] mt-7 flex  gap-[30px] mt-4'>
          
            <li className='font-satoshi font-satoshi flex items-center gap-1'><Link href="../graphic">Shop</Link>
            <Image className='h-2' src={require('/public/Vector (1).png')} alt=''/>
            </li>
            <li className='font-satoshi'>On Sale</li>
            <li className='font-satoshi'>New Arrivals</li>
            <li className='font-satoshi'>Brands</li>
        </ul>
      </div>

      <div className='mt-4 w-[48%]'>
            <button className='mt-1 pt-2 w-[480px] h-[38px] border-[1px] bg-[#F0F0F0] border-black rounded-[23px] flex gap-3 px-4'>
            <Image className='h-5' src={require('/public/Vector (2).png')} alt=''/>
            <input className='mt-[-3px] w-full text-lg focus:outline-none bg-transparent' type="text" placeholder='Search for products...'/>
            </button>
      </div>

      <div className='w-[120px] flex gap-3'>
          <Link className='pointer' href="../cart"><Image className='h-6 mt-[30px]' src={require('/public/Frame (6).png')} alt=''/></Link>
          <Image className='h-6 mt-[30px]' src={require('/public/Frame (7).png')} alt=''/>
      </div>
      

      

    </div>

    

  </div>
{/* <div className='pb-5 w-full h-[95px] flex justify-between items-center px-[95px] border-[#0000001A] border-b-2'>

    <Link className='pointer' href="../cart"><Image className='h-6 mt-[30px]' src={require('/public/Frame (6).png')} alt=''/></Link>
    <Image className='h-6 mt-[30px]' src={require('/public/Frame (7).png')} alt=''/>
    
        <h1 className='font-black mt-7 text-[38px] text-2xl'><Link href='/'>SHOP.CO</Link></h1>

        <Image className='h-8 mt-[10px]' src={require('/public/menu-regular-24.png')} alt=''/>
        
        <ul className='text-[17px] mt-7 flex justify-between gap-[30px] mt-4'>
          
            <li className='font-satoshi font-satoshi flex items-center gap-1'><Link href="../graphic">Shop</Link>
            <Image className='h-2' src={require('/public/Vector (1).png')} alt=''/>
            </li>
            <li className='font-satoshi'>On Sale</li>
            <li className='font-satoshi'>New Arrivals</li>
            <li className='font-satoshi'>Brands</li>
        </ul>


        <div className='mt-4 w-full'>
            <button className='mt-1 px-2 w-[440px] h-[38px] border-[1px] bg-[#F0F0F0] border-black rounded-[23px] flex gap-3 w-full md:w-[440px] h-[38px] border border-black bg-[#F0F0F0] rounded-[23px] flex items-center gap-3 px-4'>
            <Image className='h-5' src={require('/public/Vector (2).png')} alt=''/>
            <input className='w-full text-sm focus:outline-none bg-transparent' type="text" placeholder='Search For Products...'/>
            </button>
        </div>
    
    

        <div className='flex gap-3'>
        <Link className='pointer' href="../cart"><Image className='h-6 mt-[30px]' src={require('/public/Frame (6).png')} alt=''/></Link>
        <Image className='h-6 mt-[30px]' src={require('/public/Frame (7).png')} alt=''/>
        </div>
  </div> */}

  

    

    </>
  )
}

export default Navbar