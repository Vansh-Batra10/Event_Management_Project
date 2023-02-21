import React from 'react';
import Navbar  from './components/home';
import Complaint from './components/complaint';
import Createblog from './components/blogcreate';
import Homepagelogin from './components/homepagelogin';
import Login from './components/login';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    
    <Routes>
          <Route exact path='/' element={< Navbar />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/homelogin' element={< Homepagelogin/>}></Route>
          <Route exact path='/complaint' element={< Complaint/>}></Route>
          <Route exact path='/blogcreate' element={< Createblog/>}></Route>
   </Routes>
  </Router>
    
  );
}

export default App;
