import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Entry from './pages/Entry';
import Registration from './pages/Registration';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entry/>} />
            <Route path="/reg" element={<Registration/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
        </>
      )
}

export default App