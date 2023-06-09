import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import icon1 from './homepage-icon.png';
import icon2 from './hamburger-menu-icon.png';
import icon3 from './arrow-thin-left-icon.png';
import Card from ".//props/card.jsx";
import Success from './props/success';
import { Link } from 'react-router-dom';
const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch cart products data from the backend
    // Assuming the fetchedData array contains the cart products
    const fetchedData = [
      {
        id: 1,
        name: 'Example Product 1',
        days: 5,
        startDate: new Date(),
        price: 100,
      },
      {
        id: 2,
        name: 'Example Product 2',
        days: 3,
        startDate: new Date(),
        price: 80,
      },
    ];
    setProducts(fetchedData);
  }, []);

  const handleDaysChange = (id, event) => {
    const value = event.target.value;
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, days: parseInt(value), isEditingDays: true } : product
      )
    );
  };
  
  const handleStartDateChange = (id, date) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, startDate: date, isEditingStartDate: true } : product
      )
    );
  };
  
  const handleRemoveProduct = id => {
    setProducts(prevProducts =>
      prevProducts.filter(product => product.id !== id)
    );
  };

  const calculatePricePerDay = price => {
    return price;
  };

  const calculateTotalPrice = (price, days) => {
    return price * days;
  };

  return (
    <div className='body-web' style={{overflow:"scroll",overscrollBehaviorX:"none"}}>
        
          
    <div className='navbody'>
    <div className='icons-events'>
    <Link to="/homelogin"><img src={icon1} className='bodyicon'></img></Link>
         <img src={icon2} className='bodyicon'></img>
         <Link to= "/events"> <img src={icon3} className='bodyicon'></img></Link>    
     </div>
     <div className='bodyheading'>
         <h1>Your Package</h1>
     </div>
   
     <div className='userprofile'>

     </div>
     
    </div>
    <div className="cart-container">
      <div className="products-container">
      
        <div className="cart-items">
          {products.map(product => (
            <div key={product.id} className="cart-item">
              <div className="product-image">
                {/* Replace with your product image */}
                <img src='https://tse3.mm.bing.net/th?id=OIP.iV9Tm-mCiWqNSy42D3hyCwHaEg&pid=Api&P=0' alt={product.name} />
              </div>
              <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <div className="product-info">
                  <div>
                    <label>Price:</label>
                    <span>{product.price}</span>
                  </div>
                  <div>
  <label>Number of Days:</label>
  {!product.isEditingDays ? (
    <div>
      <span>{product.days}</span>
      <button className="edit-button" onClick={() => setProducts(prevProducts => prevProducts.map(prevProduct => prevProduct.id === product.id ? { ...prevProduct, isEditingDays: true } : prevProduct))}>
        <FaEdit />
      </button>
    </div>
                    ) : (
                      <div>
      <input
        type="number"
        value={product.days}
        onChange={event => handleDaysChange(product.id, event)}
      />
      <button className="save-button" onClick={() => setProducts(prevProducts => prevProducts.map(prevProduct => prevProduct.id === product.id ? { ...prevProduct, isEditingDays: false } : prevProduct))}>
        Save
      </button>
    </div>
                    )}
                  </div>
                  <div>
                  <label>Start Date:</label>
  {!product.isEditingStartDate ? (
    <div>
      <span>{product.startDate && product.startDate.toDateString()}</span>
      <button className="edit-button" onClick={() => setProducts(prevProducts => prevProducts.map(prevProduct => prevProduct.id === product.id ? { ...prevProduct, isEditingStartDate: true } : prevProduct))}>
        <FaEdit />
      </button>
    </div>
                    ) : (
                      <div>
                      <DatePicker
        selected={product.startDate}
        onChange={date => handleStartDateChange(product.id, date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select start date"
      />
      <button className="save-button" onClick={() => setProducts(prevProducts => prevProducts.map(prevProduct => prevProduct.id === product.id ? { ...prevProduct, isEditingStartDate: false } : prevProduct))}>
        Save
      </button>
    </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="product-remove">
                <button className="remove-button" onClick={() => handleRemoveProduct(product.id)}>
                  <FaTrash />
                </button>
                <div className='total-price'>
    <label>Total Price:</label>
    <span>{calculateTotalPrice(product.price, product.days)}</span>
  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="order-summary">
      <h2 style={{textAlign:"center"}}>Order Summary</h2>
      <table className="order-summary-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price Per Day</th>
            <th>Number of Days</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{calculatePricePerDay(product.price)}</td>
              <td>{product.days}</td>
              <td>{calculateTotalPrice(product.price, product.days)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        <h3>Total Price:</h3>
        <span>{products.reduce((total, product) => total + calculateTotalPrice(product.price, product.days), 0)}</span>
      </div>
      <div>

      </div>
      <div style={{textAlign:"center"}}>
      <button className="checkout-button">Checkout</button>
      </div>
   
    </div>
  </div>
  </div>
);
};

export default Cart;
