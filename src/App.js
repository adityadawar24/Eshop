import React from "react";
import Header from './components/Header';
import Home from './modules/Home';
import Footer from "./components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import Product from "./modules/Product";
import Cart from "./modules/Cart";
import SignUp from "./components/SignUp";
import { Scrollbars } from 'react-custom-scrollbars';

function App() {
  return (
    <>
      <Header />
      <Scrollbars  style={{
          height: 'calc(100vh - 100px)',
          scrollbarColor: 'blue',
          scrollbarWidth: 'thin',
        }}
        renderThumbVertical={({ style }) => (
          <div
            style={{
              ...style,
              backgroundColor: 'blue',
              borderRadius: '5px',
            }}
          />
        )}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="*" element={<div>404 found</div>} />
        </Routes>
      
      <Footer />
      </Scrollbars>
    </>
  );
}

export default App;
