import React from 'react';
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
import Card from ".//props/card.jsx";
import Success from './props/success';
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
function Birthday(){
    return(
        <div > 
           <div className='body-web scroll' style={{overflow:"scroll",overscrollBehaviorX:"none" }}>
        
          
           <div className='navbody'>
           <div className='icons-events'>
           <Link to="/homelogin"><img src={icon1} className='bodyicon'></img></Link>
                <img src={icon2} className='bodyicon'></img>
                <Link to= "/events"><img src={icon3} className='bodyicon'></img></Link>    
            </div>
            <div className='bodyheading'>
                <h1>Birthday</h1>
            </div>
          
            <div className='userprofile'>

            </div>
            
           </div>
          
        
            
        
           <h1 style={{textAlign:"center",marginTop:"2em"}}> Venues for Birthdays</h1>
           <div className='helo'>
      
      <CarouselSlider cards={cardsData} visibleCards={3} />
           

           </div>
           <h3 style={{textAlign:"center"}}> To explore more click here </h3>
           <h1 style={{textAlign:"center",marginTop:"2em"}}>Caterers for Birthdays</h1>
           <div  >
           
      <CarouselSlider cards={cardsData} visibleCards={3} />

           </div>
           <h3 style={{textAlign:"center"}}> To explore more click here </h3>
           <h1 style={{textAlign:"center",marginTop:"2em"}}>Decorators for Birthdays</h1>
           <div className>
        
      <CarouselSlider cards={cardsData} visibleCards={3} />

           </div>
           <h3 style={{textAlign:"center"}}> To explore more click here </h3>
           <h1 style={{textAlign:"center",marginTop:"2em"}}>Some Successful Birthday Stories</h1>
           <div className='successblock'>
            <Success content='alksdjflkajsjflkjaljslkjkldfjlkajskldjfklasjlkjfkldas'/>
            
            <Success  content='alksdjflkajsjflkjaljslkjkldsdfsdfsdfdjfklasjlkjfkldas'/>
                 
            <Success  content='alksdjflkajsjflkjaljslkjkldsdfsdfsdfdjfklasjlkjfkldas'/>
           </div>
        
           </div>
        
           
        </div>
    )
}
export default Birthday;