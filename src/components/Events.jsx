import React from 'react';
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
import Card from ".//props/card.jsx";
import data from "./data.jsx";
import { Link } from 'react-router-dom';
import CarouselSlider from './carouselslider';
const cardsData = [
    { title: 'Card 1', imageSrc: 'image1.jpg', price: '$10' },
    { title: 'Card 2', imageSrc: 'image2.jpg', price: '$20' },
    { title: 'Card 3', imageSrc: 'image3.jpg', price: '$30' },
    { title: 'Card 4', imageSrc: 'image4.jpg', price: '$40' },
    { title: 'Card 5', imageSrc: 'image5.jpg', price: '$50' },
    { title: 'Card 6', imageSrc: 'image6.jpg', price: '$60' },
    { title: 'Card 7', imageSrc: 'image7.jpg', price: '$70' },
    { title: 'Card 8', imageSrc: 'image8.jpg', price: '$80' },
  ];
function Events(){
    return(
        <div > 
           <div className='body-web' style={{overflow:"scroll",overscrollBehaviorX:"none"}}>
        
          
           <div className='navbody'>
           <div className='icons-events'>
                <Link to="/homelogin"><img src={icon1} className='bodyicon'></img></Link>
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
           
<Link to="/birthday" >
           <div className='rectangle'>
                <h2>Marriage</h2>
            </div> </Link>
            <Link to="/wedding" > 
            <div className='rectangle'>
           
            </div>
            </Link>
            <Link to="/anniversary" >
            <div className='rectangle'>
            
            </div>
            </Link>
           </div>
           <div className='row2'>
           <Link to="/retirement" >

           <div className='rectangle two'>
           
            </div>
            </Link>
            <Link to="/gettogether" >
            <div className='rectangle two'>
            
            </div>
            </Link>
           </div>
           <h1 style={{textAlign:"center"}}>Some Trending Venues</h1>
           <div className='trending'>
           <CarouselSlider cards={cardsData} visibleCards={3} />

           </div>
           <h1 style={{textAlign:"center"}}>Some Trending Caterers</h1>
           <div className='trending'>
           <CarouselSlider cards={cardsData} visibleCards={3} />

           </div>
           <h1 style={{textAlign:"center"}}>Some Trending Decorators</h1>
           <div className='trending'>
           <CarouselSlider cards={cardsData} visibleCards={3} />


           </div>
            
            
           </div>
           
           
        </div>
    )
}
export default Events;