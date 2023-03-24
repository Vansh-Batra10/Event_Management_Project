import React from 'react';
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
import Card from ".//props/card.jsx";
import Success from './props/success';
import { Link } from 'react-router-dom';
function Wedding(){
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
                <h1>Wedding</h1>
            </div>
          
            <div className='userprofile'>

            </div>
            
           </div>
          
        
            
        
           <h1 style={{textAlign:"center",marginTop:"2em"}}> Venues for Wedding</h1>
           <div className='trending'>
           <Card name='Vansh Resort' content='Located in Indore'/>

<Card name='Vansh Resort' content='Located in Indore'/>
<Card name='Vansh Resort' content='Located in Indore'/>
<Card name='Vansh Resort' content='Located in Indore'/>

           </div>
           <h3 style={{textAlign:"center"}}> To explore more click here </h3>
           <h1 style={{textAlign:"center",marginTop:"2em"}}>Caterers for Wedding</h1>
           <div className='trending' >
           <Card name='Vansh Resort' content='Located in Indore'/>

<Card name='Vansh Resort' content='Located in Indore'/>
<Card name='Vansh Resort' content='Located in Indore'/>

           </div>
           <h3 style={{textAlign:"center"}}> To explore more click here </h3>
           <h1 style={{textAlign:"center",marginTop:"2em"}}>Decorators for Wedding</h1>
           <div className='trending'>
           <Card name='Vansh Resort' content='Located in Indore'/>

<Card name='Vansh Resort' content='Located in Indore'/>
<Card name='Vansh Resort' content='Located in Indore'/>

           </div>
           <h3 style={{textAlign:"center"}}> To explore more click here </h3>
           <h1 style={{textAlign:"center",marginTop:"2em"}}>Some Successful Wedding Stories</h1>
           <div className='successblock'>
            <Success content='alksdjflkajsjflkjaljslkjkldfjlkajskldjfklasjlkjfkldas'/>
            <Success content='asdfasdfsddfasdffkjslvkjsdlkfgjkslkajskldjfklasjlkjfkldas'/>
           </div>
            
           </div>
        
           
        </div>
    )
}
export default Wedding;