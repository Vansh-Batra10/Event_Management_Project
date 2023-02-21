import React from 'react';
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
import icon4 from './216102_attachment_icon.png';
function createblog(){
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
                <h1>CreateBlog</h1>
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
            <textarea className='contentarea' rows="20"></textarea>
           </div>
           
           <img src={icon4} className="attachicon"></img>
           <a href="#" class="btn btn-white btn-animate">Submit</a>
          
           

           </div>
           
           
        </div>
    )
}
export default createblog;