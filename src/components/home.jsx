import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaAngleDown } from 'react-icons/fa';
import img from './img.png';
import img1 from './Rectangle 3.png';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const ExampleComponent = () => {
  
const ReviewItem = ({ name, comment }) => {
  return (
    <div className="review-item">
      <h3 className="review-name">{name}</h3>
      <p className="review-comment">{comment}</p>
    </div>
  );
};
  const [expanded1, setExpanded1] = useState(null);
  const [expanded2, setExpanded2] = useState(null);
  const [expanded3, setExpanded3] = useState(null);
  const [expanded4, setExpanded4] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const [currentSlide4, setCurrentSlide4] = useState(0);
  const toggleExpand0 = () => {
    setExpanded1((prevExpanded) => (prevExpanded === 0 ? null : 0));
  };
  const toggleExpand1 = () => {
    setExpanded2((prevExpanded) => (prevExpanded === 1 ? null : 1));
  };
  const toggleExpand2 = () => {
    setExpanded3((prevExpanded) => (prevExpanded === 2 ? null : 2));
  };
  const toggleExpand3 = () => {
    setExpanded4((prevExpanded) => (prevExpanded === 3 ? null : 3));
  };
  const event_img = [
    'https://tse2.mm.bing.net/th?id=OIP.F1Ass4uhEfOmT6w-JP4t7wHaE7&pid=Api&P=0&h=180aedd4b2491',
    'https://tse1.mm.bing.net/th?id=OIP.YcimphWudjrNx5_Pt-S_yAHaEo&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.sLKdEVnLbU71DP_sLWQ7GgHaEx&pid=Api&P=0&h=180',
    'https://s-media-cache-ak0.pinimg.com/736x/15/2a/76/152a76d12ff198c1c0bb3abf2efdf067.jpg',
  ];
 
  const blog_img = [
    'https://tse2.mm.bing.net/th?id=OIP.F1Ass4uhEfOmT6w-JP4t7wHaE7&pid=Api&P=0&h=180aedd4b2491',
    'https://tse1.mm.bing.net/th?id=OIP.YcimphWudjrNx5_Pt-S_yAHaEo&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.sLKdEVnLbU71DP_sLWQ7GgHaEx&pid=Api&P=0&h=180',
    'https://s-media-cache-ak0.pinimg.com/736x/15/2a/76/152a76d12ff198c1c0bb3abf2efdf067.jpg',
  ];
 
  const ideas_img = [
    'https://tse2.mm.bing.net/th?id=OIP.F1Ass4uhEfOmT6w-JP4t7wHaE7&pid=Api&P=0&h=180aedd4b2491',
    'https://tse1.mm.bing.net/th?id=OIP.YcimphWudjrNx5_Pt-S_yAHaEo&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.sLKdEVnLbU71DP_sLWQ7GgHaEx&pid=Api&P=0&h=180',
    'https://s-media-cache-ak0.pinimg.com/736x/15/2a/76/152a76d12ff198c1c0bb3abf2efdf067.jpg',
  ];
 
  const grievances_img = [
    'https://tse2.mm.bing.net/th?id=OIP.F1Ass4uhEfOmT6w-JP4t7wHaE7&pid=Api&P=0&h=180aedd4b2491',
    'https://tse1.mm.bing.net/th?id=OIP.YcimphWudjrNx5_Pt-S_yAHaEo&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.sLKdEVnLbU71DP_sLWQ7GgHaEx&pid=Api&P=0&h=180',
    'https://s-media-cache-ak0.pinimg.com/736x/15/2a/76/152a76d12ff198c1c0bb3abf2efdf067.jpg',
  ];
 
  
  const reviews = [
    { name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Jane Smith', comment: 'Praesent sed nulla sed ex feugiat suscipit.' },
    { name: 'Mike Johnson', comment: 'Suspendisse sagittis ante id leo tristique, vitae dapibus erat semper.' }
  ];

  
  
  
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? event_img.length - 1 : prevSlide - 1));
  };
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === event_img.length -1 ? 0 : prevSlide + 1));
  };
  
  const handlePrevSlide2 = () => {
    setCurrentSlide2((prevSlide) => (prevSlide === 0 ? blog_img.length - 1 : prevSlide - 1));
  };
  const handleNextSlide2 = () => {
    setCurrentSlide2((prevSlide) => (prevSlide === blog_img.length - 1 ? 0 : prevSlide + 1));
  };
  
  const handlePrevSlide3 = () => {
    setCurrentSlide3((prevSlide) => (prevSlide === 0 ? ideas_img.length - 1 : prevSlide - 1));
  };
  const handleNextSlide3 = () => {
    setCurrentSlide3((prevSlide) => (prevSlide === ideas_img.length - 1 ? 0 : prevSlide + 1));
  };
  
  const handlePrevSlide4 = () => {
    setCurrentSlide4((prevSlide) => (prevSlide === 0 ? grievances_img.length - 1 : prevSlide - 1));
  };
  const handleNextSlide4 = () => {
    setCurrentSlide4((prevSlide) => (prevSlide === grievances_img.length - 1 ? 0 : prevSlide + 1));
  };
  return (
    <div>
      <div className='homebody'>
        <div className='navbar'>
          <div className='title'>
            <img src={img} alt='logo' className='img' />
            <h2 className='navheading'>Celebrations</h2>
          </div>
          <a href='/events' className='nav-links'>
            events
          </a>
          <a href='' className='nav-links'>
            blog
          </a>
          <a href='' className='nav-links'>
            about us
          </a>
          <a href='' className='nav-links'>
            contact us
          </a>
          <a href='/login' className='nav-links'>
            login
          </a>
        </div>
        <div className='carousel home'>
          <img src={img} className='homeimage' alt='Carousel Image' />
                  <div className='carousel-container-1'>
                  <div className='carousel'>
                  <img src={blog_img[currentSlide2]} alt='Carousel Image' className={`carousel-image-1 slide-${currentSlide2}`} style={{width:"800px",height:"450px"}} />
                     
                      <button className='carousel-arrow prev-arrow' onClick={handlePrevSlide2}>
                        <FaAngleLeft />
                      </button>
                    
                     
                      <button className='carousel-arrow next-arrow' onClick={handleNextSlide2}>
                        <FaAngleRight />
                      </button>
                    
                  </div>
                  <div className='carousel-dots'>
                  {blog_img.map((_, index) => (
    <span
      key={index}
      className={`dot${currentSlide2 === index ? " active" : ""}`}
      onClick={() => setCurrentSlide2(index)}
    ></span>
  ))}
                  </div>
                </div>
         
       
        </div>
 
        <div className='whatwedo'>
          <h1>What we Do</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ac justo nec fermentum. Aliquam sed
            vulputate mi. Sed vestibulum ligula vitae sem aliquet, sit amet facilisis lorem aliquam. Phasellus sit amet
            dictum nunc. Aliquam auctor turpis ultricies, ultrices augue pellentesque, pharetra elit. Sed tincidunt urna
            eget leo rhoncus, et eleifend sem sagittis. Ut efficitur nisi et volutpat tempor. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras at suscipit dui. Duis sit amet
            nisl id dolor facilisis malesuada sit amet non tellus. Integer tempus malesuada mauris at maximus. Ut sed
            tortor id neque vestibulum tempor vel ac lorem. Integer sagittis justo sit amet ex porta tempor. Cras
            imperdiet nibh quis felis tincidunt sagittis.
            <br />
            <br />
            Mauris dignissim urna at nibh dignissim tempor. Pellentesque urna tellus, fermentum non tempus quis,
            fringilla sed neque. Nullam aliquam augue a metus placerat aliquam. Suspendisse potenti. Maecenas tempor
            sagittis diam non consequat. Duis vulputate consequat ante et imperdiet. Etiam vitae odio nisl. In sem diam,
            rutrum in enim ac, egestas suscipit est. Proin malesuada ultricies felis ac rhoncus. Sed in purus convallis,
            aliquam est a, molestie sapien.
          </p>
          <div className='features'>
            <div className='buttons-container' >
              <div
                className={`button${expanded1 === 0 ? ' expanded1' : ''}`}
                style={{ backgroundColor: '#e44e73' }}
                onClick={() => toggleExpand0()}
              >
                Events <FaAngleDown />
              </div>
              {expanded1 === 0 && (
                <div className='expanded-content'>
                  <div className='text-content'>
                    <h2>Events</h2>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ac justo nec fermentum. Aliquam sed
            vulputate mi. Sed vestibulum ligula vitae sem aliquet, sit amet facilisis lorem aliquam. Phasellus sit amet
            dictum nunc. Aliquam auctor turpis ultricies, ultrices augue pellentesque, pharetra elit. Sed tincidunt urna
            eget leo rhoncus, et eleifend sem sagittis. Ut efficitur nisi et volutpat tempor. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras at suscipit dui. Duis sit amet
            nisl id dolor facilisis malesuada sit amet non tellus. Integer tempus malesuada mauris at maximus. Ut sed
            tortor id neque vestibulum tempor vel ac lorem. Integer sagittis justo sit amet ex porta tempor. Cras
            imperdiet nibh quis felis tincidunt sagittis.</p>
                  </div>
                  <div className='carousel-container'>
                  <div className='carousel'>
                  <img src={event_img[currentSlide]} alt='Carousel Image' className={`carousel-image slide-${currentSlide}`} style={{width:"600px",height:"350px"}} />
                     
                      <button className='carousel-arrow prev-arrow' onClick={handlePrevSlide}>
                        <FaAngleLeft />
                      </button>
                    
                     
                      <button className='carousel-arrow next-arrow' onClick={handleNextSlide}>
                        <FaAngleRight />
                      </button>
                    
                  </div>
                  <div className='carousel-dots'>
                  {event_img.map((_, index) => (
    <span
      key={index}
      className={`dot${currentSlide === index ? " active" : ""}`}
      onClick={() => setCurrentSlide(index)}
    ></span>
  ))}
                  </div>
                </div>
              </div>)}
              <div
                className={`button${expanded2 === 1 ? ' expanded2' : ''}`}
                style={{ backgroundColor: '#e44e73' }}
                onClick={() => toggleExpand1()}
              >
                Blog <FaAngleDown />
              </div>
              {expanded2 === 1 && (
                <div className='expanded-content'>
                  <div className='text-content'>
                    <h2>Blog</h2>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ac justo nec fermentum. Aliquam sed
            vulputate mi. Sed vestibulum ligula vitae sem aliquet, sit amet facilisis lorem aliquam. Phasellus sit amet
            dictum nunc. Aliquam auctor turpis ultricies, ultrices augue pellentesque, pharetra elit. Sed tincidunt urna
            eget leo rhoncus, et eleifend sem sagittis. Ut efficitur nisi et volutpat tempor. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras at suscipit dui. Duis sit amet
            nisl id dolor facilisis malesuada sit amet non tellus. Integer tempus malesuada mauris at maximus. Ut sed
            tortor id neque vestibulum tempor vel ac lorem. Integer sagittis justo sit amet ex porta tempor. Cras
            imperdiet nibh quis felis tincidunt sagittis.</p>
                  </div>
                  <div className='carousel-container'>
                  <div className='carousel'>
                  <img src={blog_img[currentSlide2]} alt='Carousel Image' className={`carousel-image slide-${currentSlide2}`} style={{width:"600px",height:"350px"}} />
                     
                      <button className='carousel-arrow prev-arrow' onClick={handlePrevSlide2}>
                        <FaAngleLeft />
                      </button>
                    
                     
                      <button className='carousel-arrow next-arrow' onClick={handleNextSlide2}>
                        <FaAngleRight />
                      </button>
                    
                  </div>
                  <div className='carousel-dots'>
                  {blog_img.map((_, index) => (
    <span
      key={index}
      className={`dot${currentSlide2 === index ? " active" : ""}`}
      onClick={() => setCurrentSlide2(index)}
    ></span>
  ))}
                  </div>
                </div>
              </div>)}
              <div
                className={`button${expanded3 === 2 ? ' expanded3' : ''}`}
                style={{ backgroundColor: '#e44e73' }}
                onClick={() => toggleExpand2()}
              >
                Ideas <FaAngleDown />
              </div>
              {expanded3 === 2 && (
                <div className='expanded-content'>
                  <div className='text-content'>
                    <h2>Ideas</h2>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ac justo nec fermentum. Aliquam sed
            vulputate mi. Sed vestibulum ligula vitae sem aliquet, sit amet facilisis lorem aliquam. Phasellus sit amet
            dictum nunc. Aliquam auctor turpis ultricies, ultrices augue pellentesque, pharetra elit. Sed tincidunt urna
            eget leo rhoncus, et eleifend sem sagittis. Ut efficitur nisi et volutpat tempor. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras at suscipit dui. Duis sit amet
            nisl id dolor facilisis malesuada sit amet non tellus. Integer tempus malesuada mauris at maximus. Ut sed
            tortor id neque vestibulum tempor vel ac lorem. Integer sagittis justo sit amet ex porta tempor. Cras
            imperdiet nibh quis felis tincidunt sagittis.</p>
                  </div>
                  <div className='carousel-container'>
                  <div className='carousel'>
                  <img src={ideas_img[currentSlide3]} alt='Carousel Image' className={`carousel-image slide-${currentSlide3}`} style={{width:"600px",height:"350px"}} />
                     
                      <button className='carousel-arrow prev-arrow' onClick={handlePrevSlide3}>
                        <FaAngleLeft />
                      </button>
                    
                     
                      <button className='carousel-arrow next-arrow' onClick={handleNextSlide3}>
                        <FaAngleRight />
                      </button>
                    
                  </div>
                  <div className='carousel-dots'>
                  {ideas_img.map((_, index) => (
    <span
      key={index}
      className={`dot${currentSlide3 === index ? " active" : ""}`}
      onClick={() => setCurrentSlide3(index)}
    ></span>
  ))}
                  </div>
                </div>
              </div>)}
              <div
                className={`button${expanded4 === 3 ? ' expanded4' : ''}`}
                style={{ backgroundColor: '#e44e73' }}
                onClick={() => toggleExpand3()}
              >
                Grievance <FaAngleDown />
              </div>
              {expanded4 === 3 && (
                <div className='expanded-content'>
                  <div className='text-content'>
                    <h2>Grievance</h2>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ac justo nec fermentum. Aliquam sed
            vulputate mi. Sed vestibulum ligula vitae sem aliquet, sit amet facilisis lorem aliquam. Phasellus sit amet
            dictum nunc. Aliquam auctor turpis ultricies, ultrices augue pellentesque, pharetra elit. Sed tincidunt urna
            eget leo rhoncus, et eleifend sem sagittis. Ut efficitur nisi et volutpat tempor. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras at suscipit dui. Duis sit amet
            nisl id dolor facilisis malesuada sit amet non tellus. Integer tempus malesuada mauris at maximus. Ut sed
            tortor id neque vestibulum tempor vel ac lorem. Integer sagittis justo sit amet ex porta tempor. Cras
            imperdiet nibh quis felis tincidunt sagittis.</p>
                  </div>
                  <div className='carousel-container'>
                  <div className='carousel'>
                  <img src={grievances_img[currentSlide4]} alt='Carousel Image' className={`carousel-image slide-${currentSlide4}`} style={{width:"600px",height:"350px"}} />
                     
                      <button className='carousel-arrow prev-arrow' onClick={handlePrevSlide4}>
                        <FaAngleLeft />
                      </button>
                    
                     
                      <button className='carousel-arrow next-arrow' onClick={handleNextSlide4}>
                        <FaAngleRight />
                      </button>
                    
                  </div>
                  <div className='carousel-dots'>
                  {grievances_img.map((_, index) => (
    <span
      key={index}
      className={`dot${currentSlide4 === index ? " active" : ""}`}
      onClick={() => setCurrentSlide4(index)}
    ></span>
  ))}
                  </div>
                </div>
              </div>)}
            </div>
            <div className='featureimg' style={{ display: (expanded1 !== null||expanded2 !== null||expanded3 !== null||expanded4 !== null) ? 'none' : 'block' }}>
              <img src={img1} className='carouselimage' alt='Feature' />
            </div>
          </div>
          
        </div>
        <section className="about-us">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="section-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ac justo nec fermentum. Aliquam sed
            vulputate mi. Sed vestibulum ligula vitae sem aliquet, sit amet facilisis lorem aliquam. Phasellus sit amet
            dictum nunc. Aliquam auctor turpis ultricies, ultrices augue pellentesque, pharetra elit. Sed tincidunt urna
            eget leo rhoncus, et eleifend sem sagittis. Ut efficitur nisi et volutpat tempor.
          </p>
          <img src="https://s-media-cache-ak0.pinimg.com/736x/15/2a/76/152a76d12ff198c1c0bb3abf2efdf067.jpg" alt="Description Image" className="description-image" />
          <p>
            Ut porttitor, elit non rutrum sagittis, erat elit rhoncus est, vitae aliquet erat massa ac mauris. Donec
            aliquam lorem id tempor finibus. Proin ullamcorper, felis in dignissim tempus, nunc enim commodo velit, vel
            tincidunt enim neque et elit. Nulla venenatis, nisl sit amet consequat rutrum, lorem ex fringilla magna, id
            hendrerit orci urna sed lacus.
          </p>
          <p>
            Vivamus efficitur, sem eu tempus bibendum, neque nunc congue dolor, sed vulputate leo tortor vitae neque.
            Phasellus laoreet tristique justo, a fringilla odio commodo non. In sed justo tellus. Sed condimentum massa
            a mi scelerisque lacinia. Suspendisse lacinia consequat sem, in dignissim lectus cursus eu. Proin nec varius
            neque, at ultrices arcu.
          </p>
          {/* <img src="https://s-media-cache-ak0.pinimg.com/736x/15/2a/76/152a76d12ff198c1c0bb3abf2efdf067.jpg" alt="Description Image" className="description-image" /> */}
          <p>
            Nulla convallis condimentum ante, vel suscipit sapien tincidunt nec. Sed at ante turpis. Etiam interdum nibh
            et enim pulvinar facilisis. Suspendisse potenti. Nullam faucibus malesuada felis sed tempor. Proin varius est
            non elit eleifend tincidunt.
          </p>
          <img src="https://s-media-cache-ak0.pinimg.com/736x/15/2a/76/152a76d12ff198c1c0bb3abf2efdf067.jpg" alt="Description Image" style={{float:'left',marginRight:"20px",marginLeft:"0px"}} className="description-image" />
          <p>
            Mauris volutpat est quis consequat scelerisque. Sed imperdiet pulvinar nulla, sit amet interdum ligula
            efficitur ac. Sed scelerisque ex id nisi sagittis, in ultricies lacus dignissim. Nulla feugiat sollicitudin
            eros non tristique. Proin in metus ac dolor rutrum luctus. Nullam lacinia erat tellus, a dignissim nulla
            varius sed.lutpat est quis consequat scelerisque. Sed imperdiet pulvinar nulla, sit amet interdum ligula
            efficitur ac. Sed scscelerisque. Sed imperdiet pulvinar nulla, sit amet interdum ligula
            efficitur ac. Sed scelerisque ex id nisi sagittis, in ultricies lacus dignissim. Nulla feugiat sollicitudin
            eros non tristique. Proin in metus ac dolor rutrum luctus. Nullam lacinia erat tellus, a dignissim nulla
            varius sed.lutpat est quis consequat scelerisque. Sed imperdiet pulvinar nulla, sit amet interdum ligul
            Mauris volutpat est quis consequat scelerisque. Sed imperdiet pulvinar nulla, sit amet interdum ligula
            efficitur ac. Sed scelerisque ex id nisi sagittis, in ultricies lacus dignissim. Nulla feugiat sollicitudin
            eros non tristique. Proin in metus ac dolor rutrum luctus. Nullam lacinia erat tellus, a dignissim nulla
            varius sed.lutpat est quis consequat scelerisque. Sed imperdiet pulvinar nulla, sit amet interdum ligula
            efficitur ac. Sed scscelerisque. Sed imperdiet pulvinar nulla, sit amet interdum ligula
            efficitur ac. Sed scelerisque ex id nisi sagittis, in ultricies lacus dignissim. Nulla feugiat sollicitudin
            eros non tristique. Proin in metus ac dolor rutrum luctus. Nullam lacinia erat tellus, a dignissim nulla
            varius sed.lutpat est quis consequat scelerisque. Sed impe. Sed scelerisque ex id nisi sagittis, in ultricies lacus dignissim. Nulla feugiat sollicitudin
            eros non tristique. Proin in metus ac dolor rutrum luctus. Nullam lacinia erat tellus, a dignissim nulla
            varius sed.lutpat est quis consequat scelerisque. Sed imperdiet pulvinar nulla, sit amet interdum ligula
            efficitur ac. Sed scscele
          </p>
        </div>
        <h3 className="team-title">Our Team</h3>
        <div className="team-members">
         
          <div className="team-member">
            <img src="https://s-media-cache-ak0.pinimg.com/736x/15/2a/76/152a76d12ff198c1c0bb3abf2efdf067.jpg" alt="Team Member" className="team-member-image" />
            <h4 className="team-member-name">John Doe</h4>
            <p className="team-member-position">CEO</p>
          </div>
          <div className="team-member">
            <img src="https://s-media-cache-ak0.pinimg.com/736x/15/2a/76/152a76d12ff198c1c0bb3abf2efdf067.jpg" alt="Team Member" className="team-member-image" />
            <h4 className="team-member-name">Jane Smith</h4>
            <p className="team-member-position">COO</p>
          </div>
          <div className="team-member">
            <img src="https://s-media-cache-ak0.pinimg.com/736x/15/2a/76/152a76d12ff198c1c0bb3abf2efdf067.jpg" alt="Team Member" className="team-member-image" />
            <h4 className="team-member-name">Mike Johnson</h4>
            <p className="team-member-position">CTO</p>
          </div>
        </div>
      </div>
    </section>
        <div className='bottom'>
          <p>
            So, what are you waiting for?
            <br />
            Make your event full of happiness with your loved ones in just one click and make your event plan within
            minutes.
          </p>
          <div className='registerbtn'>
            <h1>Register Now</h1>
            <h4>or log in if already registered</h4>
          </div>
          <h2 style={{textAlign:"center" , marginTop:"100px"}}>Reviews</h2>
          <div className='review'  >
         
      {reviews.map((review, index) => (
        <ReviewItem key={index} name={review.name} comment={review.comment} />
      ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
