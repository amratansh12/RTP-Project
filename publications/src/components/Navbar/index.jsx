import React from 'react'
import logo from "../../assets/Logo.png";
import "./index.css";
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="left-nav">
                <a href='/'>
                    <img id="logo" src={logo} alt="logo" />
                    <p className="logo-text">Radio Telescope Project</p>
                </a>
            </div>
            <ul className="right-nav">
                <div className="nav-item">
                    <li>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                </div>
                <div className="nav-item">
                    <li>
                        <NavLink className="nav-link" to="/telescopes">
                            Telescopes <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 8.5L0.5 0.5H15.5L8 8.5Z" fill="#E1E1F5" />
                            </svg>
                        </NavLink>
                    </li>
                </div>
                <div className="nav-item">
                    <li>
                        <NavLink className="nav-link" to="/publications">Publications</NavLink>
                    </li>
                </div>
                <div className="nav-item">
                    <li>
                        <NavLink className="nav-link" to="/team">Team</NavLink>
                    </li>
                </div>
                <div className="nav-item">
                    <li>
                        <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;

// (
//     <body>
//         <nav className="nav">

//             <div className="left-nav">
//                 <img id="logo" src={logo} alt="logo" />
//                 <p className="logo-text">Radio Telescope Project</p>
//             </div>

//             <div className="right-nav">
//                 <div className="headings">
//                     <div className="nav-item">
//                         <a href="#" id="home" className="nav-link">Home</a>
//                         <hr className="navline" />
//                     </div>

//                     <div className="nav-item">
//                         <a href="#" id="telescopes" className="nav-link">Telescopes</a>
//                         <hr className="navline" />
//                     </div>
//                     <div className="nav-item">
//                         <a href="#" id="publications" className="nav-link">Publications</a>
//                         <hr className="navline" />
//                     </div>
//                     <div className="nav-item">
//                         <a href="#" id="team" className="nav-link">Team</a>
//                         <hr className="navline" />
//                     </div>

//                     <div className="nav-item">
//                         <a href="#" id="contact" className="nav-link">Contact us</a>
//                         <hr className="navline" />
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     </body>
// )