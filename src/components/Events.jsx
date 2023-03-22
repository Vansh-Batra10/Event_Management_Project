import React from 'react';
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
import Card from ".//props/card.jsx";
import data from "./data.jsx";
function Events(){
    return(
        <div > 
           <div className='body-web' style={{overflow:"scroll",overscrollBehaviorX:"none"}}>
        
          
           <div className='navbody'>
           <div className='icons-events'>
                <img src={icon1} className='bodyicon'></img>
                <img src={icon2} className='bodyicon'></img>
                <img src={icon3} className='bodyicon'></img>
            </div>
            <div className='bodyheading'>
                <h1>Events</h1>
            </div>
          
            <div className='userprofile'>

            </div>
            
           </div>
          
            
           <div className='row1'>
           <div className='rectangle'>
                <h2>Marriage</h2>
            </div>
            <div className='rectangle'>
           
            </div>
            <div className='rectangle'>
            
            </div>
           </div>
           <div className='row2'>
           <div className='rectangle two'>
           
            </div>
            <div className='rectangle two'>
            
            </div>
            
           </div>
           <h1 style={{textAlign:"center"}}>Some Trending Venues</h1>
           <div className='trending'>
           <Card name='Vansh Resort' content='Located in Indore'/>

<Card name='Vansh Resort' content='Located in Indore'/>
<Card name='Vansh Resort' content='Located in Indore'/>

           </div>
           <h1 style={{textAlign:"center"}}>Some Trending Caterers</h1>
           <div className='trending'>
           <Card name='Vansh Resort' content='Located in Indore'/>

<Card name='Vansh Resort' content='Located in Indore'/>
<Card name='Vansh Resort' content='Located in Indore'/>

           </div>
           <h1 style={{textAlign:"center"}}>Some Trending Decorators</h1>
           <div className='trending'>
           <Card name='Vansh Resort' content='Located in Indore'/>

<Card name='Vansh Resort' content='Located in Indore'/>
<Card name='Vansh Resort' content='Located in Indore'/>

           </div>
            
            
           </div>
           
           
        </div>
    )
}
export default Events;