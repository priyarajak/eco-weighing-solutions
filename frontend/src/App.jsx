import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">

      <BrowserRouter>

  <Navbar />

  <main className="flex-grow">

    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/inquiry-cart" element={<InquiryCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>

    </AnimatePresence>

  </main>

  <MobileNav />
  <Footer />

</BrowserRouter>

    </div>
  );
}

export default App;