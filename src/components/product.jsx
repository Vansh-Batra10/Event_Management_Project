import React from 'react';
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
import Card from ".//props/card.jsx";
import Success from './props/success';
import { Link } from 'react-router-dom';
function Product(){
    return(
        <div > 
           <div className='body-web' style={{overflow:"scroll",overscrollBehaviorX:"none"}}>
        
          
           <div className='navbody'>
           <div className='icons-events'>
           <Link to="/homelogin"><img src={icon1} className='bodyicon'></img></Link>
                <img src={icon2} className='bodyicon'></img>
                <Link to= "/events"><img src={icon3} className='bodyicon'></img></Link>    
            </div>
            <div className='bodyheading'>
                <h1>Vansh Resort</h1>
            </div>
          
            <div className='userprofile'>

            </div>
            
           </div>
          
        
           <div className='product'>
           <div className='productdesc'>
           <img src='https://tse3.mm.bing.net/th?id=OIP.iV9Tm-mCiWqNSy42D3hyCwHaEg&pid=Api&P=0'></img>
           <h2 style={{marginLeft:"50px"}}> alksjdflkjasljdklfjklajsjdflajsdlfjlaskjlkjflksajkljflkjaskljdfkljsldjflaskjdlkfjlsasjklxjfkljskldjfklasjklfjLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate v.</h2>

           </div>
          

           </div>
          
          
        
           </div>
        
           
        </div>
    )
}
export default Product;