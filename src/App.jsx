
import './App.css'
import Header from './component/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection/Collection'
import Blog from './pages/Bolg/Blog.jsx'
import Footer from './component/Footer/Footer'
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import { ToastContainer } from 'react-toastify'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Login from './pages/Login/Login.jsx'
import Contact from './pages/Contact/Contact.jsx'

function App() {

  return (
    <main className='max-width-xl'>
      <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </main>
  )
}

export default App
