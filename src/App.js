import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Components/Home/Home.js';
// import Products from './Components/Product/Products.js';
import Filter from './Components/Product/Filter.js';
import Contact from './Components/Contact/Contact.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/home' component={Home} />
        <Route exact path='/filter' component={Filter}/>
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


