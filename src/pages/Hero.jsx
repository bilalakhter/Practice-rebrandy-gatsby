import React from 'react'
import './index.css'
import heroimage from '/src/pages/assets/hero-image.png'
function Hero() {
  return (
    <div id='#home' className='wrapper'>
        <div className='absolute z-[0] w-[40%] h-[35%] top-60 right-0 pink-gradient'></div>
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full top-60 right-0 '></div>
                <div className='absolute z-[0] w-[50%] h-[50%] right-0 top-60 blue-gradient'></div>
    <div className='flex justify-between items-center p-[100px]'>
      <div className='w-[50%] mt-0 pt-0 z-10'> 
             <h1 className='heada'>A hyped solution to conservative problems</h1>
            
             <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet veritatis at dolor, autem maxime dicta animi obcaecati deleniti incidunt magni similique temporibus ratione, mollitia ab ipsam esse aliquam iste?</p>
             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
  Click Me
</button>

      </div>
               <div className='heroimage z-10 w-[40%]'>
                  <img className='w-full h-full object-cover' src={heroimage} alt="" />
            </div>
    </div>
    </div>
  )
}

export default Hero