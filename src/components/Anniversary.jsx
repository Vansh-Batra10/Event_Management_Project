// import React,{useEffect,useState} from 'react';
// import icon1 from './homepage-icon.png';
// import icon2 from './hamburger-menu-icon.png';
// import icon3 from './arrow-thin-left-icon.png';
// import Card from ".//props/card.jsx";
// import Success from './props/success';
// import { Link } from 'react-router-dom';
// import CarouselSlider from './carouselslider';
// import axios from 'axios';
// // const cardsData = [
// //     { title: 'Card 1', imageSrc: 'image1.jpg', price: '$10' },
// //     { title: 'Card 2', imageSrc: 'image2.jpg', price: '$20' },
// //     { title: 'Card 3', imageSrc: 'image3.jpg', price: '$30' },
// //     { title: 'Card 4', imageSrc: 'image4.jpg', price: '$40' },
// //     { title: 'Card 5', imageSrc: 'image5.jpg', price: '$50' },
// //     { title: 'Card 6', imageSrc: 'image6.jpg', price: '$60' },
// //     { title: 'Card 7', imageSrc: 'image7.jpg', price: '$70' },
// //     { title: 'Card 8', imageSrc: 'image8.jpg', price: '$80' },
// //   ]
// // import authorities_doc from "../authorities_doc.jsx";



  


// function Anniversary(){
//   const [Anniversary_Venue, setVenueData] = useState([]);
//   useEffect(() => {
//     fetch('/anniversary')
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//       })
//       .then((jsonRes) => setVenueData(jsonRes))
//       .catch((error) => console.error(error));
//   }, []);


//     return(
//         <div > 
//            <div className='body-web' style={{overflow:"scroll",overscrollBehaviorX:"none"}}>
        
          
//            <div className='navbody'>
//            <div className='icons-events'>
//            <Link to="/homelogin"><img src={icon1} className='bodyicon'></img></Link>
//                 <img src={icon2} className='bodyicon'></img>
//                 <Link to= "/events"> <img src={icon3} className='bodyicon'></img></Link>    
//             </div>
//             <div className='bodyheading'>
//                 <h1>Anniversaries</h1>
//             </div>
          
//             <div className='userprofile'>

//             </div>
            
//            </div>
          
        
            
        
//            <h1 style={{textAlign:"center",marginTop:"2em"}}> Venues for Anniversary</h1>
//            <div className='trending'>
//            <CarouselSlider cards={Anniversary_Venue} visibleCards={3} />
//            </div>
//            <h3 style={{textAlign:"center"}}> To explore more click here </h3>
//            <h1 style={{textAlign:"center",marginTop:"2em"}}>Caterers for Anniversary</h1>
//            <div className='trending' >
//            <CarouselSlider cards={Anniversary_Venue} visibleCards={3} />

//            </div>
//            <h3 style={{textAlign:"center"}}> To explore more click here </h3>
//            <h1 style={{textAlign:"center",marginTop:"2em"}}>Decorators for Anniversary</h1>
//            <div className='trending'>
//            <CarouselSlider cards={Anniversary_Venue} visibleCards={3} />

//            </div>
//            <h3 style={{textAlign:"center"}}> To explore more click here </h3>
//            <h1 style={{textAlign:"center",marginTop:"2em"}}>Some Successful Anniversary Stories</h1>
//            <div className='successblock'>
//             <Success content='alksdjflkajsjflkjaljslkjkldfjlkajskldjfklasjlkjfkldas'/>
//             <Success content='alksdjflkajsjflkjaljslkjkldfjlkajskldjfklasjlkjfkldas'/>
//             <Success  content='alksdjflkajsjflkjaljslkjkldfjlkajskldjfklasjlkjfkldas'/>
//            </div>
            
//            </div>
        
           
//         </div>
//     )
// }
// export default Anniversary;

// import React, { useEffect, useState } from 'react';
// import icon1 from './homepage-icon.png';
// import icon2 from './hamburger-menu-icon.png';
// import icon3 from './arrow-thin-left-icon.png';
// import Card from ".//props/card.jsx";
// import Success from './props/success';
// import { Link, useParams } from 'react-router-dom';
// import CarouselSlider from './carouselslider';
// import axios from 'axios';

// function Anniversary() {
//   const { category } = useParams();
//   const [venueData, setVenueData] = useState([]);

//   useEffect(() => {
//     fetch(`/${category}`)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//       })
//       .then((jsonRes) => setVenueData(jsonRes))
//       .catch((error) => console.error(error));
//   }, [category]);
//   return(
//     <div>
//     <h1>

//     </h1>
//       <div className='body-web' style={{ overflow: "scroll", overscrollBehaviorX: "none" }}>
//         <div className='navbody'>
//           <div className='icons-events'>
//             <Link to={`/${category}`}><img src={icon1} className='bodyicon' alt="Home" /></Link>
//             <img src={icon2} className='bodyicon' alt="Hamburger" />
//             <Link to="/events"><img src={icon3} className='bodyicon' alt="Back" /></Link>
//           </div>
//           <div className='bodyheading'>
//             <h1>{category}</h1>
//           </div>
//           <div className='userprofile'>
//             {/* User profile content */}
//           </div>
//         </div>
//         <h1 style={{ textAlign: "center", marginTop: "2em" }}> Venues for {category}</h1>
//         <div className='trending'>
//         {venueData && venueData.length > 0  ? (
//           <div className='trending'>
//             <CarouselSlider cards={venueData} visibleCards={3} category={category} subcategory='venues' />
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//         </div>
//         <h3 style={{ textAlign: "center" }}> To explore more click here </h3>
//         <h1 style={{ textAlign: "center", marginTop: "2em" }}>Caterers for {category}</h1>
//         <div className='trending' >
//         {venueData && venueData.length > 0?  (
//           <div className='trending'>
//             <CarouselSlider cards={venueData} visibleCards={3} category={category} subcategory='caterers'/>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//         </div>
//         <h3 style={{ textAlign: "center" }}> To explore more click here </h3>
//         <h1 style={{ textAlign: "center", marginTop: "2em" }}>Decorators for {category}</h1>
//         <div className='trending'>
//         {venueData && venueData.length > 0  ? (
//           <div className='trending'>
//             <CarouselSlider cards={venueData} visibleCards={3} category={category} subcategory='decoraters' />
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//         </div>
//         <h3 style={{ textAlign: "center" }}> To explore more click here </h3>
//         <h1 style={{ textAlign: "center", marginTop: "2em" }}>Some Successful {category} Stories</h1>
//         <div className='successblock'>
//           <Success content='alksdjflkajsjflkjaljslkjkldfjlkajskldjfklasjlkjfkldas' />
//           <Success content='alksdjflkajsjflkjaljslkjkldfjlkajskldjfklasjlkjfkldas' />
//           <Success content='alksdjflkajsjflkjaljslkjkldfjlkajskldjfklasjlkjfkldas' />
//         </div>
//       </div>
//     </div>
// )}

// export default Anniversary;

import React, { useEffect, useState } from 'react';
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
import Card from "./props/card.jsx";
import Success from './props/success';
import { Link, useParams } from 'react-router-dom';
import CarouselSlider from './carouselslider';
import { Carousel } from 'react-bootstrap';
import CarouselSuccess from './carousel_success';

function Anniversary() {
  const { category } = useParams();
  const [venueData, setVenueData] = useState([]);
  const [catererData, setCatererData] = useState([]);
  const [decoratorData, setDecoratorData] = useState([]);
  const [storyData, setStoriesData] = useState([]);

  useEffect(() => {
    fetch(`/${category}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonData) => {
        setVenueData(jsonData.venues);
        setCatererData(jsonData.caterers);
        setDecoratorData(jsonData.decorators);
        setStoriesData(jsonData.stories);
      })
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <div>
      <h1></h1>
      <div className='body-web' style={{ overflow: "scroll", overscrollBehaviorX: "none" }}>
        <div className='navbody'>
          <div className='icons-events'>
            <Link to={`/${category}`}><img src={icon1} className='bodyicon' alt="Home" /></Link>
            <img src={icon2} className='bodyicon' alt="Hamburger" />
            <Link to="/events"><img src={icon3} className='bodyicon' alt="Back" /></Link>
          </div>
          <div className='bodyheading'>
            <h1>{category}</h1>
          </div>
          <div className='userprofile'>
            {/* User profile content */}
          </div>
        </div>
        <h1 style={{ textAlign: "center", marginTop: "2em" }}> Venues for {category}</h1>
        <div className='trending'>
          {venueData && venueData.length > 0 ? (
            <div className='trending'>
              <CarouselSlider cards={venueData} visibleCards={3} category={category} subcategory='venues' />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <Link to={`/${category}/venues`}><h3 style={{ textAlign: "center" }}> To explore more click here </h3></Link>
        <h1 style={{ textAlign: "center", marginTop: "2em" }}>Caterers for {category}</h1>
        <div className='trending' >
          {catererData && catererData.length > 0 ? (
            <div className='trending'>
              <CarouselSlider cards={catererData} visibleCards={3} category={category} subcategory='caterers' />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      <Link to={`/${category}/caterers`}><h3 style={{ textAlign: "center" }}> To explore more click here </h3></Link>
        <h1 style={{ textAlign: "center", marginTop: "2em" }}>Decorators for {category}</h1>
        <div className='trending'>
          {decoratorData && decoratorData.length > 0 ? (
            <div className='trending'>
              <CarouselSlider cards={decoratorData} visibleCards={3} category={category} subcategory='decorators' />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      <Link to={`/${category}/decorators`}><h3 style={{ textAlign: "center" }}> To explore more click here </h3></Link>
        <h1 style={{ textAlign: "center", marginTop: "2em" }}>Some Successful {category} Stories</h1>
        <div className='successblock'>
            <CarouselSuccess cards={storyData} visibleCards={3}/>
        </div>
      </div>
    </div>
  );
}

export default Anniversary;
