import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext" // Import CartProvider
import Navigation from "./components/Navigation"
import Homepage from "./pages/Homepage"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Info from "./pages/Info"

const App = () => {
  return (
    <CartProvider> {/* Wrap everything with CartProvider */}
      <BrowserRouter>
      <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App