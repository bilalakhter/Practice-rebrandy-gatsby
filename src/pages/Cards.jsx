import React from 'react'
import './index.css'
import bird from '/src/pages/assets/birds.jpg'
function Cards() {
  return (
    <div className='cardsdisplay'>
        <h2 className='cardsheading'>The is the title for this section</h2>
        <h2 className='cardsheading2'>Some more text</h2>
    <div className='cardswrapper mt-0'>
        
    <div class="card-box w-[30%] ">
    <h1 className='gypsa'>Card Title</h1>
    <p>More text can go here as well asnd some more text lets add some more text</p>
     <div className='birdsimage '>
        <img className='birdie' src={bird} alt="" />
     </div>
  </div>
  <div class="card-box w-[30%] ">
    <h1 className='gypsa'>Card Title</h1>
    <p>More text can go here as well asnd some more text lets add some more text</p>
     <div className='birdsimage '>
        <img className='birdie' src={bird} alt="" />
     </div>
  </div>
  <div class="card-box w-[30%] ">
    <h1 className='gypsa'>Card Title</h1>
    <p>More text can go here as well asnd some more text lets add some more text</p>
     <div className='birdsimage '>
        <img className='birdie' src={bird} alt="" />
     </div>
  </div>
  </div>
  </div>
  
  )
}

export default Cards