/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Typical from 'react-typical'
import "./Profile.css";
export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
          
          <div className='colz'>
          <div className='colz-icon'>
         
            <a href='https://www.facebook.com/saksham.patni.smarty'>
                  <i className='fa fa-facebook-square'></i>
              </a>
              <a href='#'>
                  <i className='fa fa-google-plus-square'></i>
              </a>
              <a href='https://www.instagram.com/smarty_saksham_jain/'>
                  <i className='fa fa-instagram'></i>
              </a>
              <a href='https://twitter.com/sakshampatni234'>
                  <i className='fa fa-twitter'></i>
                  </a>
                  <a href='https://www.linkedin.com/in/saksham-jain-29a432214/'>
                  <i className='fa fa-linkedin'></i>
              </a>
              
              </div>
          </div>
          <div className="profile-details-name">
          <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">SAKSHAM JAIN</span>
          </span>
          </div>
           <div className='profie-details-role'>
               <span className='primary-text'>
                   {""}
                  <h1>
                   {" "}
                   <Typical
                       loop={Infinity}
                       steps={[
                           
                           "React.js",
                           1000,
                           "C",
                           1000,
                           "React Native",
                           1000,
                           "Java Script",
                           1000,
                       ]}
                   />
                   </h1>
                   <span className='profile-role-tagline'>
                            DEVELOPER
                 </span>
               </span>
           </div>

           <div className='profile-options'>
               <button className='btn primary-btn'>
               {""}
               Hire Me{""}
            </button>

            <a href='saksham.pdf' download='saksham.pdf'>
            <button className='btn highlighted-btn'>Get Resume</button>

            </a>
            
           </div>
           

           </div>

           <div className='profile-picture'>
               <div className='profile-picture-background'></div>
           </div>
           
           </div>
  )
}
