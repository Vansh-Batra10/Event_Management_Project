import React from 'react';
import Desktop from './Desktop.png'
function login(){
    return(
        <div > 
        
           <div className='login-body' style={{ backgroundImage:`url(${Desktop})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",
            backgroundPosition: "center",height:"100%",width:"100%",position:"fixed"}}>
           <div className='loginbox'>
           <h1 style={{textAlign:"center",fontSize:"3.5em"}}>Login</h1>
           <form action="action_page.php" method="post" className='form'>
           <label for="uname" style={{textAlign:"center" , padding:"20px"}}><b>Username</b></label>
         <input style={{ height:"30px",backgroundColor: "transparent"}} type="text" placeholder="Enter Username" name="uname" required></input>

         <label for="psw" style={{textAlign:"center",padding:"20px"}}><b>Password</b></label>
            <input style={{ height:"30px",backgroundColor: "transparent"}} type="password" placeholder="Enter Password" name="psw" required></input>

    <button style={{margin:"40px",width:"100px",height:"30px",marginLeft:"auto",marginRight:"auto"}} type="submit">Login</button>
    <p style={{fontSize:"0.7em",textAlign:"center"}}>Forgot</p>
            <p style={{fontSize:"0.7em",textAlign:"center"}}>Click Here to create a new Account</p>
           </form>
           </div>
        
           
           </div>
           
           
        </div>
    )
}
export default login;