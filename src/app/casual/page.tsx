import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


const Casual = () => {
  return (
    <>

        <Header/>
        <Navbar/>

      <div className='m-auto h-[25px] w-[87%] flex mt-10'>
            <li className='list-none text-[16px] hover:font-semibold'><Link href='/'>Home</Link></li>
            <Image className='mt-1 h-[16px] w-[20px]' src={require('/public/Frame.png')} alt=''/>
            <p className='font-semibold text-[18px]'>Casual</p>
        </div>
        


      <div className='m-auto flex w-[87%]  border-[#000000] gap-10'>

        <div className='mt-10 p-7 w-[390px] h-[1160px] rounded-[20px] border-[5px] border-[#0000001A]'>

          <div className='m-auto w-full h-10 flex justify-between'>
            <h1 className='text-[25px] font-semibold'>Filters</h1>
            <Image className='mt-1 h-[29px] w-[29px]' src={require('/public/Frame (1).png')} alt=''/>
          </div>
        
        <Image className='h-[1px] w-[305px]' src={require('/public/Line 13.png')} alt=''/>

          <div className='my-6 grid gap-3'>
            <div className='text-[18px] m-auto w-full h-7 flex justify-between'><p>T-shirts</p>
            <Image className='text-[18px] mt-1 h-[20px] w-[20px]' src={require('/public/Frame (2).png')} alt=''/></div>
            <div className='text-[18px] m-auto w-full h-7 flex justify-between '><p>Shorts</p>
            <Image className='text-[18px] mt-1 h-[20px] w-[20px]' src={require('/public/Frame (2).png')} alt=''/></div>
            <div className='text-[18px] m-auto w-full h-7 flex justify-between '><p>Shirts</p>
            <Image className='text-[18px] mt-1 h-[20px] w-[20px]' src={require('/public/Frame (2).png')} alt=''/></div>
            <div className='text-[18px] m-auto w-full h-7 flex justify-between'><p>Hoodie</p>
            <Image className='text-[18px] mt-1 h-[20px] w-[20px]' src={require('/public/Frame (2).png')} alt=''/></div>
            <div className='text-[18px] m-auto w-full h-7 flex justify-between'><p>Jeans</p>
            <Image className='text-[18px] mt-1 h-[20px] w-[20px]' src={require('/public/Frame (2).png')} alt=''/></div>
          </div>
        
        <Image className='h-[1px] w-[305px]' src={require('/public/Line 13.png')} alt=''/>

          <div>
            <div className='w-full h-10 flex justify-between'>
              <h1 className='text-[25px] font-semibold'>Price</h1>
              <Image className='mt-3 h-[20px] w-[20px]' src={require('/public/Frame (3).png')} alt=''/>
            </div>
            <div>
              <Image className='mt-1 h-[23px] w-[290px]' src={require('/public/Group 6.png')} alt=''/>
            </div>
            <div className='flex mt-1 text-[17px]'>
              <p className='ml-[45px]'>$50</p>
              <p className='ml-[135px]'>$200</p>
            </div>
          
          
          </div>

        <Image className='h-[1px] w-[305px]' src={require('/public/Line 13.png')} alt=''/>

          <div>
            <div className='my-3 w-full h-10 flex justify-between'>
              <h1 className='text-[25px] font-semibold'>Colors</h1>
              <Image className='mt-3 h-[20px] w-[20px]' src={require('/public/Frame (3).png')} alt=''/>     
            </div>

                    
            <Image className='h-[107px] w-full' src={require('/public/Frame 89.png')} alt=''/>
              {/* <div className='h-10 w-10 rounded-full bg=red-500 border-2'></div>
              <div className='h-10 w-10 rounded-full bg=green-500 border-2'></div>
              <div className='h-10 w-10 rounded-full bg=gray-500 border-2'></div>
              <div className='h-10 w-10 rounded-full bg=gray-500 border-2'></div> */}
          </div>
           
        <br />
        <Image className='h-[1px] w-[305px]' src={require('/public/Line 13.png')} alt=''/>
    
          <div className='mb-3 grid gap-1'>
            <div className='w-full h-10 flex justify-between'>
              <h1 className='text-[25px] font-semibold'>Size</h1>
              <Image className='mt-3 h-[20px] w-[20px]' src={require('/public/Frame (3).png')} alt=''/>
            </div>
            <div className='flex gap-2'>
              <div className='h-9 w-[100px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>XX-Small</p></div>
              <div className='h-9 w-[90px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>X-Small</p></div>
            </div>
            
            <div className='flex gap-2'>
              <div className='h-9 w-[75px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>Small</p></div>
              <div className='h-9 w-[90px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>Medium</p></div>
            </div>
            
            <div className='flex gap-2'>           
              <div className='h-9 w-[75px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>Large</p></div>
              <div className='h-9 w-[90px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>X-Large</p></div>            
            </div>
            
            <div className='flex gap-2'>
              <div className='h-9 w-[100px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>XX-Large</p></div>
              <div className='h-9 w-[110px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>3X-Large</p></div>
            </div>
            
            <div className='flex gap-2'>
              <div className='h-9 w-[100px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>4X-Large</p></div>
            </div>          
          </div>






        <Image className='h-[1px] w-[305px]' src={require('/public/Line 13.png')} alt=''/>

          <div className='mt-1'>
            <div className='w-full h-10 flex justify-between'>
              <h1 className='text-[25px] font-semibold'>Dress Style</h1>
              <Image className='mt-3 h-[20px] w-[20px]' src={require('/public/Frame (3).png')} alt=''/>
            </div>            
            <div className='my-6 grid gap-3'>
            <div className='text-[18px] m-auto w-full h-7 flex justify-between'><p>Casual</p>
            <Image className='text-[18px] mt-1 h-[20px] w-[20px]' src={require('/public/Frame (2).png')} alt=''/></div>
            <div className='text-[18px] m-auto w-full h-7 flex justify-between '><p>Formal</p>
            <Image className='text-[18px] mt-1 h-[20px] w-[20px]' src={require('/public/Frame (2).png')} alt=''/></div>
            <div className='text-[18px] m-auto w-full h-7 flex justify-between '><p>Party</p>
            <Image className='text-[18px] mt-1 h-[20px] w-[20px]' src={require('/public/Frame (2).png')} alt=''/></div>
            <div className='text-[18px] m-auto w-full h-7 flex justify-between'><p>Gym</p>
            <Image className='text-[18px] mt-1 h-[20px] w-[20px]' src={require('/public/Frame (2).png')} alt=''/></div>
            </div>
          </div>

          <button className='rounded-[19px] w-full h-10 bg-[#000000]'>
            <p className='text-[#FFFFFF]'>Apply Filter</p>
          </button>








          


          
      </div>

      <div className='mt-7'>

          <div className='flex justify-between w-[97%] ml-2'>
          <h1 className='font-semibold text-[34px]'>Casual</h1>
          <Image className='mt-6 h-5 w-[450px]' src={require('/public/Frame 67.png')} alt=''/>
          
          </div>

        
          <div className='lg:mt-[25px] lg:h-[400px] w-[850px] lg:flex lg:gap-[38px] lg:justify-center sm:grid sm:grid-cols-2 sm:m-auto sm:h-auto sm:w-auto'>

          
            <div className='h-[350px] w-[260px]'>
            <Image className='h-[259px] w-[259px]' src={require('/public/Frame 33 (2).png')} alt=''/>

            <div>
                <h3 className='mt-1 font-bold'>Gradient Graphic T-shirt</h3>
              </div>
              <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 39.png')} alt=''/></div>
              <div className='flex gap-3'>
              <h1 className='mt-1 font-semibold text-[23px]'>$145</h1>            
              </div>

            </div>


            <div className='h-[350px] w-[260px]'>
              <Image className='h-[259px] w-[259px]' src={require('/public/Frame 34 (2).png')} alt=''/>
              <div>
                <h3 className='mt-1 font-bold'>Polo with Tipping Details</h3>
              </div>
              <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 35.png')} alt=''/></div>
                <div><h1 className='mt-1 font-semibold text-[23px]'>$180</h1></div>

              </div>


            <div className='h-[350px] w-[260px]'>
      <Image className='h-[259px] w-[259px]' src={require('/public/Frame 38 (2).png')} alt=''/>
    <div>  
      <h3 className='mt-1 font-bold'>Black Striped T-shirt</h3>
    </div>
    <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 35.png')} alt=''/></div>

    <div className='flex gap-3'>
  <h1 className='mt-1 font-semibold text-[23px]'>$120</h1>
  <h1 className='mt-1 font-semibold text-[23px]'><del>$150</del></h1>
  <div className='mt-3 h-5 w-10 bg-pink-100 text-xs text-pink-600 text-center rounded-[20px]'>-30%</div>
    </div>

            </div>

          </div>


          <div className='lg:mt-[-10px] lg:h-[400px] w-[850px] lg:flex lg:gap-[38px] lg:justify-center sm:grid sm:grid-cols-2 sm:m-auto sm:h-auto sm:w-auto'>

          
          <div className='h-[350px] w-[260px]'>
            <Image className='h-[259px] w-[259px]' src={require('/public/Frame 33.png')} alt=''/>

            <div>
            <h3 className='mt-1 font-bold'>Skinny Fit Jeans</h3>
            </div>
            <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 39.png')} alt=''/></div>
            <div className='flex gap-3'>
              <h1 className='mt-1 font-semibold text-[23px]'>$240</h1>
              <h1 className='mt-1 font-semibold text-[23px]'><del>$260</del></h1>
              <div className='mt-3 h-5 w-10 bg-pink-100 text-xs text-pink-600 text-center rounded-[20px]'>-20%</div>
            </div>
            
            </div>


            <div className='h-[350px] w-[260px]'>
            <Image className='h-[259px] w-[259px]' src={require('/public/Frame 34.png')} alt=''/>
            <div>
            <h3 className='mt-1 font-bold'>Checkered Shirt</h3>
            </div>
            <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 35.png')} alt=''/></div>
            <div><h1 className='mt-1 font-semibold text-[23px]'>$180</h1></div>
            
            </div>


            <div className='h-[350px] w-[260px]'>
            <Image className='h-[259px] w-[259px]' src={require('/public/Frame 38.png')} alt=''/>
            <div>  
            <h3 className='mt-1 font-bold'>Sleeve Striped T-shirt</h3>
            </div>
            <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 35.png')} alt=''/></div>
          
            <div className='flex gap-3'>
              <h1 className='mt-1 font-semibold text-[23px]'>$130</h1>
              <h1 className='mt-1 font-semibold text-[23px]'><del>$160</del></h1>
              <div className='mt-3 h-5 w-10 bg-pink-100 text-xs text-pink-600 text-center rounded-[20px]'>-30%</div>
            </div>
            
            </div>

          </div>


          <div className='lg:mt-[-10px] lg:h-[400px] w-[850px] lg:flex lg:gap-[38px] lg:justify-center sm:grid sm:grid-cols-2 sm:m-auto sm:h-auto sm:w-auto'>

          
          <div className='h-[350px] w-[260px]'>
            <Image className='h-[259px] w-[259px]' src={require('/public/Frame 32 (1).png')} alt=''/>

            <div>
                <h3 className='mt-1 font-bold'>Vertical Striped Sshirt</h3>
            </div>
            <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 35 (1).png')} alt=''/></div>
            <div className='flex gap-3'>
              <h1 className='mt-1 font-semibold text-[23px]'>$212</h1>
              <h1 className='mt-1 font-semibold text-[23px]'><del>$232</del></h1>
              <div className='mt-3 h-5 w-10 bg-pink-100 text-xs text-pink-600 text-center rounded-[20px]'>-20%</div>
            </div>
            </div>

        
            <div className='h-[350px] w-[260px]'>
            <Image className='h-[259px] w-[259px]' src={require('/public/Frame 33 (1).png')} alt=''/>

            <div>
            <h3 className='mt-1 font-bold'>Courage Graphic T-shirt</h3>
            </div>
            <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 39 (1).png')} alt=''/></div>
            <div className='flex gap-3'>
              <h1 className='mt-1 font-semibold text-[23px]'>$145</h1>
            </div>
            
            </div>


            <div className='h-[350px] w-[260px]'>
            <Image className='h-[259px] w-[259px]' src={require('/public/Frame 34 (1).png')} alt=''/>
            <div>
            <h3 className='mt-1 font-bold'>Loose Fit Bermuda Shorts</h3>
            </div>
            <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 40 (1).png')} alt=''/></div>
            <div><h1 className='mt-1 font-semibold text-[23px]'>$80</h1></div>
            
            </div>

          </div>


        
          
          <div>
            <Image className='mb-[95px] h-10 w-[90%]' src={require('/public/Frame 88.png')} alt=''/>
          </div>
          



          

      </div>

    </div>
        

    <Footer/>
    </>
  )
}

export default Casual