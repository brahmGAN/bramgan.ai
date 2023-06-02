import {Link} from 'react-router-dom'
import './hamburgermenu.css'
import React, { useState } from 'react';


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };
  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };


  return (
    <header className="header">
      <Link to='/'>
      <div style={{marginLeft:'20px'}}><img src={'/icons/brahmlogo.png'} alt={''} width={100} height={100} /></div>
      </Link>
      <button style={{display:'flex'}} className="hamburger" onClick={toggleMenu}>
       <img src={'/icons/hamburger.svg'} alt={' '} />
      </button>
      <nav className={`menu ${isOpen ? 'open' : ''}`} style={{display:'flex', flexDirection:'row'}}>
      <button style={{display:'flex', justifyContent:'flex-start', backgroundColor:'#fff', border:'none', marginTop:'10px',cursor: 'pointer'}} onClick={toggleMenu}><img src={'/icons/close.svg'} alt={''} width={40} height={40} /></button>
        <ul>
            <Link to='/'>
          <li onClick={toggleMenu}>Home</li></Link>
         
            <Link to='/solutions'><span onClick={toggleSolutions} className="dropdown-button">
              Solutions<img src={isSolutionsOpen ? '/icons/up.svg' : 'icons/down.svg'} alt={''} />
            </span></Link>
            <ul className={`submenu ${isSolutionsOpen ? 'open' : ''}`}>
              <Link to='/ecommerce'>
                <li onClick={toggleMenu}>eCommerce</li>
              </Link>
              <Link to='/xr'>
                <li onClick={toggleMenu}>XR</li>
              </Link>
              <Link to='/game'>
                <li onClick={toggleMenu}>Gaming</li>
              </Link>
            </ul>
          <Link to='/technologies'>
          <li onClick={toggleMenu}>Technologies</li></Link>
          
          <Link to='/about'><span onClick={toggleAbout} className="dropdown-button">
              About <img src={isAboutOpen ? '/icons/up.svg' : 'icons/down.svg'} alt={''} />
            </span></Link>
            <ul className={`submenu ${isAboutOpen ? 'open' : ''}`}>
              <Link to='/about'>
                <li onClick={toggleMenu}>About Us</li>
              </Link>
              <Link to='/team'>
                <li onClick={toggleMenu}>Team</li>
              </Link>
            </ul>
        </ul>
      </nav>
    </header>
  );
};

export default HamburgerMenu;

