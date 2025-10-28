import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext" // Import CartProvider
import Navigation from "./components/Navigation"
import Homepage from "./pages/Homepage"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Info from "./pages/Info"
import Contact from "./pages/Contact"
import Store from "./pages/Store"

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/info" element={<Info />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App