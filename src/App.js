import React from "react";
import Header from './components/Header';
import Home from './modules/Home';
import Footer from "./components/Footer/Footer";
import {Routes,Route} from 'react-router-dom';
import Product from "./modules/Product";
import Cart from "./modules/Cart";
import SignUp from "./components/SignUp";


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<Product/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="*" element={<div>404 found</div>} />
    </Routes>
    
    <Footer/>
    </>
  );
}

export default App;
