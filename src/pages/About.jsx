import React from 'react'
import './index.css'
import image2 from '/src/pages/assets/about.png'
import icon from '/src/pages/assets/icon1.png'
function About() {
  return (
    <div className='about-section'>
       <div className='about_container'>
                    <div className='content-about about-item w-[60%]'>
                       <h3 className='jojo'>THis sentence is ,</h3>
                       <h2 className='koko'>About the heading title</h2>
                       <p className='yoyo'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus itaque optio molestias, explicabo aliquam temporibus voluptatum minima deserunt illum tenetur atque nihil maiores accusantium aperiam minus facere facilis natus pariatur.</p>
                         <div className='about_chota_container p-[20px]'>
                          <div className='chota-item'>
                            <div className='lain-men w-[25%] mb-[10px]'>
                              <img src={icon} alt="" />
                              <h4 className='gypsa2'>Point title</h4>
                            </div>
                     
                             <p className='para-lain-men'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur odit suscipit laudantium iusto. Sed temporibus, asperiores, nihil mollitia ipsam beatae commodi.</p>
                          </div>
                          <div className='chota-item'>
                          <div className='lain-men w-[25%]'>
                              <img src={icon} alt="" />
                              <h4 className='gypsa2'>Point title</h4>
                            </div>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur odit suscipit laudantium iusto. Sed temporibus, asperiores, nihil mollitia ipsam beatae commodi.</p>
                          </div>
                          <div className='chota-item'>
                          <div className='lain-men w-[25%]'>
                              <img src={icon} alt="" />
                              <h4 className='gypsa2'>Point title</h4>
                            </div>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur odit suscipit laudantium iusto. Sed temporibus, asperiores, nihil mollitia ipsam beatae commodi.</p>
                          </div>

                         </div>
                    </div>
                    <div className='image-about w-[40%] p-[20px]'>
                      <img src={image2} alt="" />
                    </div>
       </div>
       </div>
  )
}

export default About