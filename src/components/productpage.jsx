import React from "react";
import { useParams,Link } from "react-router-dom";
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
import ImageViewer from "./prodimg";
import MyMap from "./maps";
const ProductPage = () => {
  const { productId } = useParams();

  // Assuming you have a products array containing all the product data
  const products = [
    { id: "1",address:"adkjfaskfdlakjfkalsflkjaskldjfalsjfkdl", title: "Product 1",location:[22.669428755832723,75.83182858758516],price:"200000Rs/day",capacity:"500",rating:"4.5",review:["asfjkasdlfsakldf","djljajflkajskdjflaksjdfkljasf","dlakjflsjdfk"], description: "alksjdflkjasljdklfjklajsjdflajsdlfjlaskjlkjflksajkljflkjaskljdfkljsldjflaskjdlkfjlsasjklxjfkljskldjfklasjklfjLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v.",img:["https://tse3.mm.bing.net/th?id=OIP.iV9Tm-mCiWqNSy42D3hyCwHaEg&pid=Api&P=0","https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg","https://cf.bstatic.com/xdata/images/hotel/max500/32911212.jpg?k=948804ff3f967ddeb76169d586f9133d29defb051aceaa02ddf277830e7a8459&o=&hp=1","https://tse3.mm.bing.net/th?id=OIP.iV9Tm-mCiWqNSy42D3hyCwHaEg&pid=Api&P=0","https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg","https://cf.bstatic.com/xdata/images/hotel/max500/32911212.jpg?k=948804ff3f967ddeb76169d586f9133d29defb051aceaa02ddf277830e7a8459&o=&hp=1","https://tse3.mm.bing.net/th?id=OIP.iV9Tm-mCiWqNSy42D3hyCwHaEg&pid=Api&P=0","https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg","https://cf.bstatic.com/xdata/images/hotel/max500/32911212.jpg?k=948804ff3f967ddeb76169d586f9133d29defb051aceaa02ddf277830e7a8459&o=&hp=1"]},
    { id: "2",address:"adkjfaskfdlakjfkalsflkjaskldjfalsjfkdl", title: "Product 2",location:"",price:"200000Rs/day",capacity:"500",rating:"4.5",review:["asfjkasdlfsakldf","djljajflkajskdjflaksjdfkljasf","dlakjflsjdfk"], description: "Description 2",img: "https://tse3.mm.bing.net/th?id=OIP.iV9Tm-mCiWqNSy42D3hyCwHaEg&pid=Api&P=0"  },
    { id: "3",address:"adkjfaskfdlakjfkalsflkjaskldjfalsjfkdl", title: "Product 3",location:"",price:"200000Rs/day",capacity:"500",rating:"4.5",review:["asfjkasdlfsakldf","djljajflkajskdjflaksjdfkljasf","dlakjflsjdfk"], description: "Description 3" ,img: "https://tse3.mm.bing.net/th?id=OIP.iV9Tm-mCiWqNSy42D3hyCwHaEg&pid=Api&P=0" },
    // Add more product data as needed
  ];

  // Find the product with the matching productId
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
       <div className='body-web' style={{overflow:"scroll",overscrollBehaviorX:"none"}}>
        
          
        <div className='navbody'>
        <div className='icons-events'>
        <Link to="/homelogin"><img src={icon1} className='bodyicon'></img></Link>
             <img src={icon2} className='bodyicon'></img>
             <Link to= "/events"><img src={icon3} className='bodyicon'></img></Link>    
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
        <h4> {product.review.length} reviews</h4>
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
            <button style={{margin:"30px",backgroundColor:"#4C5270",color:"white",width:"150px",height:"50px"}}>Add to Package</button>
            <button style={{margin:"30px",backgroundColor:"#4C5270",color:"white",width:"150px",height:"50px"}}>Add to Favorites</button>
        </div>
        </div>
       <div style={{width:"500px",display:"flex",flexDirection:"column",alignItems:"center",marginLeft:"100px",position:"absolute"}}>
       <h2 style={{marginTop:"80px"}}>Location</h2>
       <h3>{product.address}</h3>
       <MyMap location={product.location}  />
       </div>

        </div>
       
       
     
        </div>
     
    </div>
  );
};

export default ProductPage;
