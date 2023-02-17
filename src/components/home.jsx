import React from 'react';
import img from './img.png';
import img1 from './Rectangle 3.png';

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
      <div className='carousel'>
      <img src={img} className='homeimage'></img>
      <img src={img1} className='carouselimage'></img>
      </div>
      <div className='whatwedo'>
        <h1> What we Do</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ac justo nec fermentum. Aliquam sed vulputate mi. Sed vestibulum ligula vitae sem aliquet, sit amet facilisis lorem aliquam. Phasellus sit amet dictum nunc. Aliquam auctor turpis ultricies, ultrices augue pellentesque, pharetra elit. Sed tincidunt urna eget leo rhoncus, et eleifend sem sagittis. Ut efficitur nisi et volutpat tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras at suscipit dui. Duis sit amet nisl id dolor facilisis malesuada sit amet non tellus. Integer tempus malesuada mauris at maximus. Ut sed tortor id neque vestibulum tempor vel ac lorem. Integer sagittis justo sit amet ex porta tempor. Cras imperdiet nibh quis felis tincidunt sagittis.<br></br>

Mauris dignissim urna at nibh dignissim tempor. Pellentesque urna tellus, fermentum non tempus quis, fringilla sed neque. Nullam aliquam augue a metus placerat aliquam. Suspendisse potenti. Maecenas tempor sagittis diam non consequat. Duis vulputate consequat ante et imperdiet. Etiam vitae odio nisl. In sem diam, rutrum in enim ac, egestas suscipit est. Proin malesuada ultricies felis ac rhoncus. Sed in purus convallis, aliquam est a, molestie sapien.</p>
      <div className='features'>
      <div className='buttonsection'>
      <div className='featurebtn'>
          <h1 className='featurehdg' >Events<i class="arrow down"></i></h1>
        </div>
        <div className='featurebtn'>
        <h1 className='featurehdg'>blog<i class="arrow down"></i></h1>
        </div>
        <div className='featurebtn'>
        <h1 className='featurehdg'>Ideas<i class="arrow down"></i></h1>
        </div>
        <div className='featurebtn'>
        <h1 className='featurehdg'>Grievences<i class="arrow down"></i></h1>
        </div>
      </div>
        
        <div className='featureimg'>
        <img src={img1} className='carouselimage'></img>
        </div>
      
      </div>
      </div>
      <div className='bottom'>
      <p>
      So , what are you waiting for<br></br>
 Make ur event full of happiness with your loved one in just one click and make  
<br>
</br>
ur event plan within minutes
        

      </p>
      <div className='registerbtn'>
        <h1> Register Now </h1>
      </div>
      <div className='review'>
      <h1> Reviews </h1>
      <div className='reviews'></div>

      </div>
      </div>
      
      </div>
      
     
      </div>
    
    );
  }
  
  export default Navbar;