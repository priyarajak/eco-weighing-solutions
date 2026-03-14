import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inquiry from "./pages/Inquiry";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Products from "./pages/Products";
import MobileNav from "./components/MobileNav";
import Login from "./pages/Login";
import InquiryCart from "./pages/InquiryCart";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <BrowserRouter>

        <Navbar />

        <main className="flex-grow">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/inquiry-cart" element={<InquiryCart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>

        </main>
        <MobileNav />
        <Footer />

        <ToastContainer position="top-right" autoClose={2000} />

      </BrowserRouter>

    </div>
  );
}

export default App;