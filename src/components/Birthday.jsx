import React from 'react';
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
import Card from ".//props/card.jsx";
import Success from './props/success';

function Birthday(){
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
                <h1>Birthday</h1>
            </div>
          
            <div className='userprofile'>

            </div>
            
           </div>
          
        
            
        
           <h1 style={{textAlign:"center",marginTop:"2em"}}> Venues for Birthdays</h1>
           <div className='trending'>
           <Card name='Vansh Resort' content='Located in Indore'/>

<Card name='Vansh Resort' content='Located in Indore'/>
<Card name='Vansh Resort' content='Located in Indore'/>
<Card name='Vansh Resort' content='Located in Indore'/>

           </div>
           <h3 style={{textAlign:"center"}}> To explore more click here </h3>
           <h1 style={{textAlign:"center",marginTop:"2em"}}>Caterers for Birthdays</h1>
           <div className='trending' >
           <Card name='Vansh Resort' content='Located in Indore'/>

<Card name='Vansh Resort' content='Located in Indore'/>
<Card name='Vansh Resort' content='Located in Indore'/>

           </div>
           <h3 style={{textAlign:"center"}}> To explore more click here </h3>
           <h1 style={{textAlign:"center",marginTop:"2em"}}>Decorators for Birthdays</h1>
           <div className='trending'>
           <Card name='Vansh Resort' content='Located in Indore'/>

<Card name='Vansh Resort' content='Located in Indore'/>
<Card name='Vansh Resort' content='Located in Indore'/>

           </div>
           <h3 style={{textAlign:"center"}}> To explore more click here </h3>
           <h1 style={{textAlign:"center",marginTop:"2em"}}>Some Successful Birthday Stories</h1>
           <div className='successblock'>
            <Success content='alksdjflkajsjflkjaljslkjkldfjlkajskldjfklasjlkjfkldas'/>
            <Success content='alksdjflkajsjflkjaljslkjkldfjlkajskldjfklasjlkjfkldas'/>
            <Success  content='alksdjflkajsjflkjaljslkjkldfjlkajskldjfklasjlkjfkldas'/>
           </div>
            
           </div>
        
           
        </div>
    )
}
export default Birthday;