import './App.css';
import NavbarMain from './Navbar';
import Hero from './Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeaturedPorducts from './FeaturedPorducts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Error from './Error';
import { useContext } from 'react';
import React from 'react';
import { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';




function App() {

  // const listOfItems = async() =>{
  //   const data = await fetch('https://api.escuelajs.co/api/v1/products')
  //   const response = await data.json()
  //   console.log(response)
  // }

  // listOfItems()


  return (
    <Router>
      <NavbarMain />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
    // <div>
    //  
    //   <Hero />
    //   <FeaturedPorducts />



    // </div>
  );
}

export default App;
