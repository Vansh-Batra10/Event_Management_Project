import React from 'react';
import Navbar  from './components/home';
import Complaint from './components/complaint';
import Createblog from './components/blogcreate';
import Homepagelogin from './components/homepagelogin';
import Login from './components/login';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Events from './components/Events';
import Anniversary from './components/Anniversary';
import ProductPage from "./components/productpage";
import DetailedProducts from './components/more_products';
import CartPage from './components/cart';
import { CartProvider } from './components/cartcontext';

function App() {
  return (
    <CartProvider>
    <Router>
    
    <Routes>
          <Route exact path='/' element={< Navbar />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/homelogin' element={< Homepagelogin/>}></Route>
          <Route exact path='/complaint' element={< Complaint/>}></Route>
          <Route exact path='/blogcreate' element={< Createblog/>}></Route>
          <Route exact path='/events' element={< Events/>}></Route>
          <Route path="/cart" element={<CartPage/>} />
          <Route  path="/:category" element={<Anniversary/>} />
          <Route path="/:category/:subcategory/:productId" element={<ProductPage/>} />
          <Route path="/:category/:subcategory" element={<DetailedProducts/>} />
   </Routes>
  </Router>
  </CartProvider>
  );
}

export default App;
