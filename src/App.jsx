import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from "./pages/Checkout";
import Nav from './components/Nav'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
