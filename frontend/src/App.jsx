import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import InquiryCart from "./pages/InquiryCart";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import ProtectedRoute from "./components/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AnimatedRoutes() {

  const location = useLocation();

  return (

    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/inquiry-cart" element={<InquiryCart />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>

    </AnimatePresence>

  );

}


function App() {

  return (

    <BrowserRouter>

      <div className="flex flex-col min-h-screen">

        <Navbar />

        <main className="flex-grow">

          <AnimatedRoutes />

        </main>

        <MobileNav />

        <Footer />

        <ToastContainer position="top-right" autoClose={2000} />

      </div>

    </BrowserRouter>

  );

}

export default App;