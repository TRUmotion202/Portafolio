import React, { useEffect, useState } from 'react';
import "./styles/Navbar.css"
import texts from "../utils/Language/text.json"

const Navbar = ({ idiom, changeIdiom}) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const [showMenu, setShowMenu] = useState(false);

  const handleToggleClick = () => {
    setShowMenu(!showMenu);
  }

  const handleCloseClick = () => {
    setShowMenu(false);
  }

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className='Navbar' style={{ display: isNavbarVisible ? 'flex' : 'none' }}>
      <div className='Navbar__language'>
        <span className='spain-icon'></span>
        <label className="switch">
          <input onClick={changeIdiom} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span className='usa-icon'></span>
      </div>
      <nav className='Navbar__section' >
        <span onClick={handleToggleClick} className="Navbar__menu"><i className='bx bx-menu'></i></span>
        <div className={`Navbar__sections ${showMenu ? "show-menu" : ""}`}>
          <span onClick={handleCloseClick} className='Navbar__close'><i className='bx bx-x'></i></span>
          <ul className="Navbar__navigate">
            <li><a onClick={handleCloseClick} href="#skills">{texts[idiom].navbar.skills}</a></li>
            <li><a onClick={handleCloseClick} href="#projects">{texts[idiom].navbar.projects}</a></li>
            <li><a onClick={handleCloseClick} href="#contact">{texts[idiom].navbar.contact}</a></li>
          </ul>
        </div>

      </nav>
    </div>

  );
};

export default Navbar;
