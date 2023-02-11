import React from 'react';
import img from './img.png'
function Navbar() {
    return (
      <div >
      <div className='homebody'>
      <div className='navbar'>
      <div className='title'>
      <img src={img} alt='logo' className='img' ></img>
      <h2 className='navheading'>Celebrations</h2>
      </div>
        <a href='' className='nav-links'>events</a>
        <a href=''  className='nav-links'>blog</a>
        <a href=''  className='nav-links'>about us</a>
        <a href=''  className='nav-links'>contact us</a>
        <a href=''  className='nav-links'>login</a>
      </div>

      </div>
      
       
      </div>
    
    );
  }
  
  export default Navbar;