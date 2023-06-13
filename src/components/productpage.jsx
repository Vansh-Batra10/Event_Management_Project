import React, { useState,useEffect } from "react";
import { useContext } from "react";
import { useParams,Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
import ImageViewer from "./prodimg";
import MyMap from "./maps";
import ReviewsList from './props/comment';
import CartPage from './cart';
import { CartContext } from "./cartcontext";

const ProductPage = () => {
   const { category,subcategory, productId } = useParams();
  const [products, setVenueData] = useState([]);
  useEffect(() => {
    fetch(`/${category}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
          
        }
      })
      .then((jsonRes) => { const categoryData = jsonRes[subcategory]; // Access the specific subcategory data
      setVenueData(categoryData);})
      .catch((error) => console.error(error));
  }, []);

  const [addedToCart, setAddedToCart] = useState(false);
  const [numberOfDays, setNumberOfDays] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const selectedProduct = products.find((p) => p.id === productId);

    const newCartItem = {
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      quantity: numberOfDays,
    };

    addToCart(newCartItem);
    setAddedToCart(true);
  };

  const handleNumberOfDaysChange = (e) => {
    setNumberOfDays(Number(e.target.value));
  };
  
  if (products.length === 0) {
    return <div>Loading...</div>;
  }
  const product = products.find((p) => p.id === productId);

  // if (products.length === 0) {
  //   return <div>Loading...</div>;
  // }

  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div>
   
  
     
       <div className='body-web' style={{overflow:"scroll",overscrollBehaviorX:"none"}}>
        
          
        <div className='navbody'>
        <div className='icons-events'>
        <Link to="/homelogin"><img src={icon1} className='bodyicon'></img></Link>
             <img src={icon2} className='bodyicon'></img>
             <Link to= {`/${category}`}><img src={icon3} className='bodyicon'></img></Link>    
         </div>
         <div className='bodyheading'>
             <h1>{product.title}</h1>
         </div>
       
         <div className='userprofile'>

         </div>
         
        </div>
       
     
        <div className='product'>
        <div className='productdesc'>
        <div style={{marginRight:"30px",marginLeft:"50px",float:"left"}}>
         <ImageViewer images={product.img} />
        </div>
        
        <p style={{textAlign:"justify",marginRight:"30px"}}>{product.description} </p>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h2>Rating</h2>
        <h2>{product.rating}/5</h2>
        <h4> {product.comments.length} reviews</h4>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h2>Price</h2>
        <h2>{product.price}</h2>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h2>Capacity</h2>
        <h2>{product.capacity}</h2>
        </div>
              
            
           
        </div>
        <div style={{textAlign:"center"}}>
        {!addedToCart ? (
              <div>
                <label htmlFor="numberOfDays">Number of Days:</label>
                <input
                  type="number"
                  id="numberOfDays"
                  value={numberOfDays}
                  onChange={handleNumberOfDaysChange}
                   className="input-number-days"
                />
                <button style={{margin:"30px",backgroundColor:"#4C5270",color:"white",width:"150px",height:"50px"}} onClick={handleAddToCart}>
                  Add to Package
                </button>
              </div>
            ) : (
              <div>Added to Package!</div>
            )}
            <button style={{margin:"30px",backgroundColor:"#4C5270",color:"white",width:"150px",height:"50px"}}>Add to Favorites</button>
        </div>
        </div>
        <div>
        <div style={{width:"500px",display:"flex",flexDirection:"column",alignItems:"center",marginLeft:"100px",position:"absolute"}}>
       <h2 style={{marginTop:"50px"}}>Location</h2>
       <h3>{product.address}</h3>
       <MyMap location={product.location}  />
       </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginLeft:"60%",marginTop:"3%",marginRight:"5%"}}>
          <h2>Reviews</h2>
          <div>
          <ReviewsList reviews={product.comments} />
          </div>
        </div>
        </div>
     

        </div>
       
     
        </div>
     
    </div>
  );
};

export default ProductPage;
