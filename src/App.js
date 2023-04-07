import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import SignUp from './pages/SignUp';
import SingleBlog from './pages/SingleBlog';
import Privacy from './pages/Information/Privacy';
import Refund from './pages/Information/Refund';
import Shipping from './pages/Information/Shipping';
import Terms from './pages/Information/Terms';
import SingleProd from './pages/SingleProd';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import ResetPass from './pages/ResetPass';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='product' element={<OurStore />} />
      <Route path='product/:id' element={<SingleProd />} />
      <Route path='cart' element={<Cart />} />
      <Route path='checkout' element={<Checkout />} />
      
      <Route path='blogs' element={<Blogs />} />
      <Route path='blog/:id' element={<SingleBlog />} />
      <Route path='compare-product' element={<CompareProduct />} />
      <Route path='wishlist' element={<WishList />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='forgot-password' element={<ForgotPass />} />
      <Route path='reset-password' element={<ResetPass />} />
      
      <Route path='privacy' element={<Privacy />} />
      <Route path='refund' element={<Refund />} />
      <Route path='shipping' element={<Shipping />} />
      <Route path='terms' element={<Terms />} />

      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
