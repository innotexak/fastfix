import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { CgMenuGridR } from 'react-icons/cg';
import { FaWindowClose, FaCaretDown } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(false);
    // } else {
    setDropdown(true);
    // }
  };

  const onMouseLeave = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(true);
    // } else {
    setDropdown(false);
    // }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          FastFix
        </Link>
        <div className="menu-icon" onMouseEnter={handleClick}>
          {click ? <FaWindowClose /> : <CgMenuGridR />}
          {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              Services <FaCaretDown />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/safety" className="nav-links" onClick={closeMobileMenu}>
              Safety
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
              Help
            </Link>
          </li>
        </ul>

        <div className="login-singup">
          <Link to="/login" className="nav-link" onClick={closeMobileMenu}>
            <BsFillPersonFill />
            Login
          </Link>

          <Link to="/sign-up" className="nav-link" onClick={closeMobileMenu}>
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
