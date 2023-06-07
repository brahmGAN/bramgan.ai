import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import './nav-bar.css'

export default function NavBar(){
  
   return (

      <> 
      <div className="menu-container">
      <div className='logoicon'>
        <Link to='/'>
      <img src={'/icons/brahmlogo.png'} alt={''} width={100} height={100} />
      </Link> 
      </div>
      <div className="navcontainer">
        <Link to='/' className="menu-item">
          Home
        </Link>

        <div className='dropdown'>

        <Link to='/solutions'  className="dropbtn ">
          Solutions
        </Link>
            <div className="dropdown-content">
            <Link to='/ecommerce' >eCommerce</Link>
            <Link to='/xr'>XR</Link>
            <Link to='/game'>Gaming</Link>
          </div>
        </div>
        <Link to="/technologies" className="menu-item">
          Technologies
        </Link>
        <div  className='dropdown'>

        <Link to='./about' className="menu-item">
        About
           
        </Link>
        </div>
        
        <div>
          {/* <Link to='./contactus'> */}
         <button className="button1"><a href='https://app.brahmgan.com' target="_blank">Try Now</a></button>
         {/* </Link> */}
      </div>
      </div>
      </div>     
      </>
    );
  }
  