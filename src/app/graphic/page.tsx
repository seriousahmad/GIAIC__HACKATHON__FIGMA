import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Graphic = () => {
  return (
    <>
    
    <div className='h-[2500px]'>
    <Header/>
    <Navbar/>

      <div>
          
        <div className='m-auto h-[25px] w-[87%] flex mt-10'>
            <li className='list-none text-[16px] hover:font-semibold'><Link href='/'>Home</Link></li>
            <Image className='mt-1 h-[16px] w-[20px]' src={require('/public/Frame.png')} alt=''/>
            <p className='text-[18px]'>Shop</p>
            <Image className='mt-1 h-[16px] w-[20px]' src={require('/public/Frame.png')} alt=''/>
            <p className='text-[18px]'>Men</p>
            <Image className='mt-1 h-[16px] w-[20px]' src={require('/public/Frame.png')} alt=''/>
            <p className='font-semibold text-[18px]'>T-shirts</p>
        </div>

        <div className='ml-[95px] mt-10 flex mb-10'>
            <div className=''>
            <Image className='py-1 h-[200px] w-[175px]' src={require('/public/image 2.png')} alt=''/>
            <Image className='py-1 h-[200px] w-[175px]' src={require('/public/image 5.png')} alt=''/>
            <Image className='py-1 h-[200px] w-[175px]' src={require('/public/image 6.png')} alt=''/>
            </div>


            <div className='ml-5'>
            <Image className='h-[596px] w-[450px]' src={require('/public/image 1.png')} alt=''/>
            </div>

            
            <div className='ml-10'>           
              <Image className='h-[30px] w-[610px]' src={require('/public/One Life Graphic T-shirt.png')} alt=''/>
              <Image className='my-4 h-[25px] w-[195px]' src={require('/public/Frame 11.png')} alt=''/>
            
              <div className='my-4 flex gap-4'>
                <h1 className='mt-1 font-semibold text-[35px]'>$260</h1>
                <h1 className='text-[#0000004D] mt-1 font-semibold text-[35px]'><del>$300</del></h1>
                <div className='gap=3 mt-4 h-8 w-[50px] bg-pink-100 text-xs text-pink-600 text-center rounded-[20px]'><p className='text-[17px] mt-2'>-40%</p></div>            
              </div>
              <p className='text-[#00000099]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and <br /> breathable fabric, it offers superior comfort and style</p>
              
              <p className='mt-10 text-[#00000099]'>Select Colors</p>
              
              <Image className='mt-3 h-[35px] w-[150px]' src={require('/public/Frame 77.png')} alt=''/>
              
              
              <p className='mt-8 text-[#00000099]'>Choose Size</p>


              <div className='flex gap-1'>   
                                    
              <div className='my-3 flex gap-2'>
                <div className='h-9 w-[75px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>Small</p></div>
                <div className='h-9 w-[90px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>Medium</p></div>
              </div>
            
              <div className='my-3 flex gap-2'>           
                <div className='h-9 w-[75px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>Large</p></div>
                <div className='h-9 w-[90px] rounded-[20px] bg-[#F0F0F0] hover:bg-[#000000]'><p className='mt-2 text-center text-[#00000099] hover:text-[#FFFFFF]'>X-Large</p></div>            
              </div>
              </div>

              <div className='mt-6 flex gap-4'>
                <button className='rounded-[25px] w-[40%] h-[50px] bg-[#F0F0F0]'>
                  <div className='flex justify-around'>
                  
                    <Image className='mt-2 h-[25px] w-[25px]' src={require('/public/Frame (4).png')} alt=''/>
                    <p className='text-[25px]'>1</p>
                    <Image className='mt-2 h-[25px] w-[25px]' src={require('/public/Frame (5).png')} alt=''/>
                    {/* <p className='text-[40px]'>-</p>
                    <p className='text-[40px]'>+</p> */}
                  </div>
                </button>
                <button className='rounded-[25px] w-[60%] h-[50px] h-10 bg-[#000000]'>
                  <p className='text-[#FFFFFF]'>Add to Cart</p>
                </button>
              </div>
        
            </div>
        </div>

            <br />  

      <div className='m-auto flex justify-evenly w-full h-[100px]'>
        <div className='mt-7 w-[250px] h-[40px]  border-b-2'><h1 className='ml-[53px] text-[20px] text-[#00000099]'>Product Details</h1></div>
        <div className='mt-7 w-[250px] h-[40px] border-b-2 border-black'><h1 className='ml-[50px] text-[20px] '>Rating & Reviews</h1></div>
        <div className='mt-7 w-[250px] h-[40px] border-b-2 border'><h1 className=' ml-[95px] text-[20px] text-[#00000099]'>FAQs</h1></div>

      </div>


        <div className='m-auto w-[87.5%] flex justify-between'>
        <div className='flex gap-3 '>   
          <Image className='h-[21px] w-[130px]' src={require('/public/All Reviews.png')} alt=''/>
          <Image className='mt-1 h-[18px] w-[40px]' src={require('/public/(451).png')} alt=''/>        
        </div>
          <Image className='h-[48px] w-[400px]' src={require('/public/Frame 21.png')} alt=''/> 
        </div>

  
        <br />

        <div className='ml-[100px] w-[88.5%] grid grid-cols-2 gap-5'>

          <div className='my-4 p-5 h-[205px] w-[95%] border-2 border-gray-200'>
          <div className='flex justify-between'>
            <Image className='h-[17px] w-[120px]' src={require('/public/Frame 10.png')} alt=''/>
            <Image className='h-[13px] w-[24px]' src={require('/public/Frame 27.png')} alt=''/>
          </div>
          <div>
            <Image className='my-2 h-[25px] w-[145px]' src={require('/public/Frame 31.png')} alt=''/>
            <p className='text-[#00000099] max-w-prose'>I absolutely love this t-shirt. The design is unique and the fabric is confortable. As a fellow designer, I appreciate the attention to detail. It has become my favorite go-to shirt.
            <br /><br />
            <b>Posted on August 14, 2023</b>
            </p>
          </div> 
          </div>

          <div className='my-4 p-5 h-[205px] w-[95%] border-2 border-gray-200'>
          <div className='flex justify-between'>
            <Image className='h-[17px] w-[100px]' src={require('/public/Frame 10 (1).png')} alt=''/>
            <Image className='h-[13px] w-[24px]' src={require('/public/Frame 27.png')} alt=''/>
          </div>
          <div>
            <Image className='my-2 h-[25px] w-[105px]' src={require('/public/Frame 31 (2).png')} alt=''/>
            <p className='text-[#00000099] max-w-prose'>The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I am quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.
            <br /><br />
            <b>Posted on August 15, 2023</b>
            </p>
          </div> 
          </div>       
        
          <div className='my-4 p-5 h-[205px] w-[95%] border-2 border-gray-200'>
          <div className='flex justify-between'>
            <Image className='h-[17px] w-[90px]' src={require('/public/Frame 10 (2).png')} alt=''/>
            <Image className='h-[13px] w-[24px]' src={require('/public/Frame 27.png')} alt=''/>
          </div>
          <div>
            <Image className='my-2 h-[25px] w-[115px]' src={require('/public/Frame 31 (3).png')} alt=''/>
            <p className='text-[#00000099] max-w-prose'>This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer touch in every aspect of this shirt.
            <br /><br />
            <b>Posted on August 16, 2023</b>
            </p>
          </div> 
          </div>        

          <div className='my-4 p-5 h-[205px] w-[95%] border-2 border-gray-200'>
          <div className='flex justify-between'>
            <Image className='h-[17px] w-[100px]' src={require('/public/Frame 10 (1).png')} alt=''/>
            <Image className='h-[13px] w-[24px]' src={require('/public/Frame 27.png')} alt=''/>
          </div>
          <div>
            <Image className='my-2 h-[25px] w-[105px]' src={require('/public/Frame 31 (4).png')} alt=''/>
            <p className='text-[#00000099] max-w-prose'>As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It iss evident that the designer poured their creativity into making this t-shirt stand out.
            <br /><br />
            <b>Posted on August 17, 2023</b></p>
          </div> 
          </div>

          <div className='my-4 p-5 h-[205px] w-[95%] border-2 border-gray-200'>
          <div className='flex justify-between'>
            <Image className='h-[17px] w-[100px]' src={require('/public/Frame 10 (1).png')} alt=''/>
            <Image className='h-[13px] w-[24px]' src={require('/public/Frame 27.png')} alt=''/>
          </div>
          <div>
            <Image className='my-2 h-[25px] w-[105px]' src={require('/public/Frame 31 (5).png')} alt=''/>
            <p className='text-[#00000099] max-w-prose'>This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designers skill. It is like wearing a piece of art that reflects my passion for both design and fashion.
            <br /><br />
            <b>Posted on August 18, 2023</b>
            </p>
          </div> 
          </div>        

          <div className='my-4 p-5 h-[205px] w-[95%] border-2 border-gray-200'>
          <div className='flex justify-between'>
            <Image className='h-[17px] w-[120px]' src={require('/public/Frame 10.png')} alt=''/>
            <Image className='h-[13px] w-[24px]' src={require('/public/Frame 27.png')} alt=''/>
          </div>
          <div>
            <Image className='my-2 h-[27px] w-[95px]' src={require('/public/Frame 31 (1).png')} alt=''/>
            <p className='text-[#00000099] max-w-prose'>I am not wearing a t-shirt; I am wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.
            <br /><br />
            <b>Posted on August 19, 2023</b>
            </p>
          </div> 
          </div>

         </div>

      <div>
        <Image className='m-auto h-[55px] w-[230px] border-1 border-black rounded-[18px]' src={require('/public/Frame 28 (1).png')} alt=''/>
      </div>



        <div className='mt-[100px] h=[70px] w-auto'>
            <Image className='lg:m-auto h-[36px] w-[530px]' src={require('/public/You might also like.png')} alt=''/>
        </div>

        <div className='lg:mt-[50px] lg:h-[400px] sm:-h-[500px]w-full lg:flex lg:gap-[35px] lg:justify-center sm:mt-[100px] sm:grid sm:grid-cols-2 sm:m-auto sm:h-auto sm:w-auto'>

            <div className='h-[350px] w-[260px]'>
              <Image className='h-[259px] w-[259px]' src={require('/public/Frame 32 (2).png')} alt=''/>
              <div>  
                <h3 className='mt-1 font-bold'>Polo with Contrast Trims</h3>
              </div>
              <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 35.png')} alt=''/></div>

              <div className='flex gap-3'>
                <h1 className='mt-1 font-semibold text-[23px]'>$212</h1>
                <h1 className='mt-1 font-semibold text-[23px]'><del>$242</del></h1>
                <div className='mt-3 h-5 w-10 bg-pink-100 text-xs text-pink-600 text-center rounded-[20px]'>-20%</div>
                </div>
              </div>
    
        

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
      </div>


      

    
    </div>

    <Footer/>
    </>
    

  )
}

export default Graphic