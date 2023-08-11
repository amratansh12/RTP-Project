import React from 'react'
import logo from "../Resources/navImage.png";
import "./Nav.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <body>
        <nav className="nav">

            <div className="left-nav">
                <img id="logo" src={logo} alt="logo" />
                <p className="logo-text">Radio Telescope Project</p>
            </div>

            <div className="right-nav">
                <div className="headings">
                    <div className="nav-item">
                        <Link to="RTP-Project/" id="home" className='nav-link'>Home</Link>
                        <hr className="navline" />
                    </div>
                    
                    <div className="nav-item">
                        <Link to="RTP-Project/telescopes" id="telescopes" className="nav-link">Telescopes</Link>
                        <hr className="navline" />
                    </div>
                    <div className="nav-item">
                        <Link to="RTP-Project/publications" className='nav-link'>Publications</Link>
                        <hr className="navline" />
                    </div>
                    <div className="nav-item">
                        <Link to='RTP-Project/team' className='nav-link'>Team</Link>
                        <hr className="navline" />
                    </div>

                    <div className="nav-item">
                        <a href="#" id="contact" className="nav-link">Contact us</a>
                        <hr className="navline" />
                    </div>
                </div>
            </div>
        </nav>
    </body>
  )
}

export default Navbar;


