import './App.scss';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Cart from './pages/cart/Cart';
import CheckOut from './pages/checkout/CheckOut';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MyAccount from './pages/MyAccount/MyAccount';
import OrderTracking from './pages/OrderTracking/OrderTracking';
import Product from './pages/product/Product';
import React from 'react';
import Shop from './pages/shop/Shop';
import TestPage from './pages/TestPage/TestPage';
import Whishlist from './pages/wishlist/Whishlist';

import Detail from './pages/Detail/Detail';

import Logout from './pages/MyAccount/Logout';
import Register from './pages/MyAccount/Register';
import Login from './pages/MyAccount/Login';


function App() {
  return (
    <>
      <Header />
       <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path='/product/:id' element={<Detail/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orderTracking" element={<OrderTracking />} />
          <Route path="/wishlist" element={<Whishlist />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
