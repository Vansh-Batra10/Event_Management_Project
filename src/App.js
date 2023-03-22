import React from 'react';
import Navbar  from './components/home';
import Complaint from './components/complaint';
import Createblog from './components/blogcreate';
import Homepagelogin from './components/homepagelogin';
import Login from './components/login';
import Birthday from './components/Birthday';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Events from './components/Events';
function App() {
  return (
    <Router>
    
    <Routes>
          <Route exact path='/' element={< Navbar />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/homelogin' element={< Homepagelogin/>}></Route>
          <Route exact path='/complaint' element={< Complaint/>}></Route>
          <Route exact path='/blogcreate' element={< Createblog/>}></Route>
          <Route exact path='/events' element={< Events/>}></Route>
          <Route exact path='/birthday' element={< Birthday/>}></Route>
   </Routes>
  </Router>
    
  );
}

export default App;
