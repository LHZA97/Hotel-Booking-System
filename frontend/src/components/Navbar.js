import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import useForm from './pages/useForm';
import './styles/Navbar.css';

function Navbar() {
  const {Logout} = useForm();
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TROPICAL RESORT
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/rooms'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Rooms
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/dashboards'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dashboards
              </Link>
            </li>

            <li>
              <Link
                to='/signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Signup
              </Link>
            </li>
          </ul>
          <Button
                className='btns'   
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={Logout}
                link='/'
                >
                Logout
                </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
