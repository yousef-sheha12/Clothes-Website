import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SalePage from "./pages/SalePage";
import AllProductsPage from "./pages/AllProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage";
import { cartIndex } from "./store";
import Page404 from "./pages/Page404";
import ShippingInfo from "./components/ShippingInfo";
function App() {
  const { value } = cartIndex();
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full h-vh bg-white text-black">
        {value && <CartPage />}
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <SalePage />
                <AllProductsPage />
              </>
            }
          />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
