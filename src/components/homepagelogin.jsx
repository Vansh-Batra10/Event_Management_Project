import React from 'react';
import event from './event.png'
import blog from './blogicon.png'
import idea from './ideaicon.png'
import complaint from './complaint-icon.png'
import user from './userprofile.png'
function homepagelogin(){
    return(
        <div > 
           <div className='body-web loginhomebody'>
           <div className='navbody'>
           
            <div className='bodyheading'>
                <h1>Welcome Vansh</h1>
            </div>
            
           </div>
           <div className='row1'>
           <div className='widget'>
                <img className='homeimg' src={event}></img>
                <h2>Events</h2>
            </div>
            <div className='widget'>
            <img className='homeimg' src={blog}></img>
                <h2>Blog</h2>
            </div>
            <div className='widget'>
            <img className='homeimg' src={idea}></img>
                <h2>Ideas</h2>
            </div>
           </div>
           <div className='row2'>
           <div className='widget two'>
           <img className='homeimg' src={complaint}></img>
                <h2>Issues</h2>
            </div>
            <div className='widget two'>
            <img className='homeimg' src={user}></img>
                <h2>Profile</h2>
            </div>
            
           </div>
           <div className='homepagesectiontwo'>
                <h1>Trending Ideas</h1>
                <div className='ideasection'>
                <div className='ideasectionimg'>

                </div>
                <div className='ideasectiontext'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate v..... Read More</p>
                </div>
             

                </div>
                <div className='ideasection'>
                <div className='ideasectiontext alte'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate v..... Read More</p>
                </div>
                <div className='ideasectionimg altei'>

                </div>

                </div>
                <h4>To see more ideas click here to visit ideas section</h4>
                <h4>...</h4>
                <h1>Trending Blogs</h1>
                <div className='ideasection'>
                <div className='ideasectionimg'>

                </div>
                <div className='ideasectiontext'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate v..... Read More</p>
                </div>
             

                </div>
                <div className='ideasection'>
                <div className='ideasectiontext alte'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate v..... Read More</p>
                </div>
                <div className='ideasectionimg altei'>

                </div>

                </div>
                <h4>To see more blogs click here to visit ideas section</h4>
                <h4>...</h4>
              
           </div>
           
           </div>
           
           
        </div>
    )
}
export default homepagelogin;