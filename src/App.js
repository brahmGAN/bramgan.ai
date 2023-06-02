import './App.css';
import './gloabal.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer.component';
import Solutions from './components/solutions/solutions';
import Technologies from './components/technologies/technologies'
import About from './components/about/about'
import Game from './components/game/game'
import XR from './components/XR/xr'
import ECommerce from './components/ecommerce/ecommerce'
import Team from './components/team/team'
import ContactUs from './components/contact/contact'
import Home from './components/home/home'
import NavBar from './components/nav-bar/nav-bar.component'
import ContactSection from './components/contactSection/contactSection.component'
import HamburgerMenu from './components/hamburgermenu/hamburgerMenu.component'

import { useEffect, useState } from 'react';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const [showHam, setShowHam] = useState(false)

  const isMobile = () => {
    return window.matchMedia("(max-width: 768px)").matches
  }

  useEffect(() => {
      setShowHam(isMobile());        
    if(window) {
      window.addEventListener('resize', () => {
        setShowHam(isMobile());        
      })
    }
  }, [])

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
    <Router>
      <div className='App'>
        { showHam ? <HamburgerMenu /> : <NavBar />}
      </div>
    <Routes>
    <Route exact path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/about" element={<About />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/xr" element={<XR />} />
        <Route path="/game" element={<Game />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/home" element={<Home />} />
    </Routes>
    <ContactSection />
    <Footer />
    </Router>
    </>
  );
}

export default App;
