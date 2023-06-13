import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './App.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Carousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handlePrevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
  
    const handleNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };
  
    return (
      <div className='carousel-container'>
        <div className='carousel'>
          <img src={images[currentSlide]} alt='Carousel Image' className={`carousel-image slide-${currentSlide} circle`} style={{ width: "400px", height: "250px" }} />
          <button className='carousel-arrow prev-arrow' onClick={handlePrevSlide} style={{marginTop:"250px",marginLeft:"25px"}}>
            <FaAngleLeft />
          </button>
          <button className='carousel-arrow next-arrow' onClick={handleNextSlide} style={{marginTop:"250px",marginLeft:"20px" }}>
            <FaAngleRight />
          </button>
        </div>
        <div className='carousel-dots' >
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot${currentSlide === index ? " active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  }
  
function detailed_products() {
   
  const { category, subcategory } = useParams();
  const [Data, setData] = useState([]);
    

  useEffect(() => {
    fetch(`/${category}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonData) => {
        const subcategoryData = jsonData[subcategory];
        setData(subcategoryData);
      })
      .catch((error) => console.error(error));
  }, [category, subcategory]);
  
 

  return (
    <div className="result-bg" style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1623042881382-cf8b93f284d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5hdnklMjBibHVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" + ")" , overflowY:"scroll"}}>
      <div style={{ marginBottom: "2em" }}>
        <hr />
        <div >
          <h1 style={{textAlign:"center",color:"white"}}>{category} {subcategory}</h1>
        </div>
        <div>
          {Data.map((authority, index) => {
            const isEven = index % 2 === 0;
            const cardId = isEven ? "none" : "right-authority-card";
            return (
              <div className="left-authority-card" id={cardId}>
                <div className="person">
                <Carousel images={authority.img} />
                </div>
                
                  <div className="content1">{authority.title}</div>
                    <div style={{display:"flex",position:"absolute",marginLeft:"35%",marginTop:"4%"}}>
                        <h2>Address: {authority.address}</h2>
                    </div>
                    <div style={{display:"flex",position:"absolute",marginLeft:"35%",marginTop:"7%"}}>
                        <h2>Price: {authority.price}</h2>
                    </div>
                    <div style={{display:"flex",position:"absolute",marginLeft:"35%",marginTop:"10%"}}>
                        <h2>Capacity: {authority.capacity}</h2>
                    </div>
                    <div style={{display:"flex",position:"absolute",marginLeft:"35%",marginTop:"13%"}}>
                        <h2>Rating: {authority.rating}/5</h2>
                    </div>
                    <div style={{display:"flex",position:"absolute",marginLeft:"35%",marginTop:"16%"}}>
                        <Link to={`/${category}/${subcategory}/${authority.id}`}><h2>To get more details and book click here</h2></Link>
                    </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default detailed_products;
