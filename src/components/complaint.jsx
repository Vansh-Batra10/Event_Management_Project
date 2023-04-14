import React from 'react';
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
function Complaint(){
    return(
        <div > 
           <div className='body-web'>
           <div className='navbody'>
           <div className='icons'>
                <img src={icon1} className='bodyicon'></img>
                <img src={icon2} className='bodyicon'></img>
                <img src={icon3} className='bodyicon'></img>
            </div>
            <div className='bodyheading'>
                <h1>Complaints</h1>
            </div>
            <div className='userprofile'>

            </div>

           </div>
           <div className='firstarea'>
            <h1>Title</h1>
            <textarea className='titlearea'></textarea>
           </div>
           <div className='secondarea'>
            <h1>Content</h1>
            <textarea className='contentarea' rows="22"></textarea>
           </div>
          
        
           <div class="wrap">
  <button class="button">Submit</button>
</div>
        </div>
        </div>

        
    )
}
export default Complaint;