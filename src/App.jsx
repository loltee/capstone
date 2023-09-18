// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidenav from "./components/sidenav";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Contact from "./pages/Contact";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OurStore from "./pages/ourStore";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/login";
import MyCart from "./components/MyCart";
import { useState } from "react";
import LogOut from "./components/LogOut";

function App() {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header token={token} cart={cart} />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="home" index element={<Home />} />

          <Route path="contact" element={<Contact />} />
          <Route
            path="/store"
            element={<OurStore cart={cart} setCart={setCart} />}
          />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />

          <Route
            path="/cart"
            element={<MyCart cart={cart} setCart={setCart} />}
          />

          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
