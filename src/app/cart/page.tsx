import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const page = () => {
  return (
    <>
    <Header/>
    <Navbar/>
  <div className='h-[800px]'>
        <div className='m-auto h-[25px] w-[87%] flex  mt-10'>
            
        <li className='list-none text-[16px] hover:font-semibold'><Link href='/'>Home</Link></li>
        <Image className='mt-1 h-[16px] w-[20px]' src={require('/public/Frame.png')} alt=''/>
        <p className='font-semibold text-[18px]'>Cart</p>
    </div>

    <div className='my-10'>
        <Image className='ml-[95px] h-[30px] w-[240px]' src={require('/public/Your cart.png')} alt=''/>
    </div>


    <div className='ml-[110px] flex gap-3 h-auto w-[84.5%]'>

      <div className='p-7 w-[60%]     rounded-[20px] border-[5px] border-[#0000001A]'>
        
          <div className='flex gap-4'>
            <Image className='h-[120px] w-[110px]' src={require('/public/Frame 33 (2).png')} alt=''/>
            <div>
              <h1 className='text-[19px] font-bold'>Gradient Graphic T-shirt</h1>         
              <Image className='mb-6 h-[40px] w-[80px]' src={require('/public/Frame 92.png')} alt=''/>
              <h1 className='text-[22px] font-bold'>$145</h1>
            </div>
            <div >
                <Image className='ml-[310px] h-[25px] w-[25px]' src={require('/public/Vector (5).png')} alt=''/>
                <Image className='ml-[205px] mt-[60px] h-[45px] w-[129px]' src={require('/public/Frame 17.png')} alt=''/>
              </div>
          </div>
          <br />    
          <div className='flex gap-4'>
            <Image className='h-[120px] w-[110px]' src={require('/public/Frame 34.png')} alt=''/>
            <div>
              <h1 className='text-[19px] font-bold'>Checkered Shirt</h1>         
              <Image className='mb-6 h-[40px] w-[80px]' src={require('/public/Frame 92 (1).png')} alt=''/>
              <h1 className='text-[22px] font-bold'>$180</h1>
            </div>
            <div>
                <Image className='ml-[385px] h-[25px] w-[25px]' src={require('/public/Vector (5).png')} alt=''/>
                <Image className='ml-[280px] mt-[60px] h-[45px] w-[129px]' src={require('/public/Frame 17.png')} alt=''/>
              </div>
          </div>
          <br />    
          <div className='flex gap-4'>
            <Image className='h-[120px] w-[110px]' src={require('/public/Frame 33.png')} alt=''/>
            <div>
              <h1 className='text-[19px] font-bold'>Gradient Graphic T-shirt</h1>         
              <Image className='mb-6 h-[40px] w-[80px]' src={require('/public/Frame 92 (2).png')} alt=''/>
              <h1 className='text-[22px] font-bold'>$240</h1>
            </div>
            <div >
                <Image className='ml-[310px] h-[25px] w-[25px]' src={require('/public/Vector (5).png')} alt=''/>
                <Image className='ml-[205px] mt-[60px] h-[45px] w-[129px]' src={require('/public/Frame 17.png')} alt=''/>
              </div>
          </div>
        
      </div>


       <div className='p-7 w-[40%]     rounded-[20px] border-[5px] border-[#0000001A]'>
          <Image className='h-[400px] w-full' src={require('/public/Frame 28.png')} alt=''/>
       </div>
    </div>

  </div>

<Footer/>
    </>
    
  )
}

export default page