import React from 'react'
import person from '/src/pages/assets/person.png'
import person1 from '/src/pages/assets/person1.png'
import person2 from '/src/pages/assets/person2.png'
import person3 from '/src/pages/assets/person3.png'
import person4 from '/src/pages/assets/person4.png'
import person5 from '/src/pages/assets/person5.png'
function Team() {
  return (
   
      <div className='containerteam'>
          <div className='teammeet'>
             <div className='teamflex'>
              <div className='teamtext'>
                <div>
                <h1 className='letsmeet1'>Meet</h1>
                <h1 className='letsmeet2'>Our team</h1>
              </div>
              </div>
              <div className='teammembers'>
                         <div className='teamitem'> <img className='imgteamitem' src={person} alt="" /><h4 className='teamnaam mt-2'>Jack</h4></div>
                         <div className='teamitem'> <img className='imgteamitem' src={person1} alt="" /><h4 className='teamnaam mt-2'>Ellie</h4></div>
                         <div className='teamitem'> <img className='imgteamitem' src={person2} alt="" /><h4 className='teamnaam mt-2'>Neymar</h4></div>
                         <div className='teamitem'> <img className='imgteamitem' src={person3} alt="" /><h4 className='teamnaam mt-2'>Emmy</h4></div>
                         <div className='teamitem'> <img className='imgteamitem' src={person4} alt="" /><h4 className='teamnaam mt-2'>Jason</h4></div>
                         <div className='teamitem'> <img className='imgteamitem' src={person5} alt="" /><h4 className='teamnaam mt-2'>Gizelle</h4></div>
              </div>
             </div>
          </div>
  </div>
  
   
  )
}

export default Team