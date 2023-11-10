import React, { useEffect, useState } from 'react';
import './App.css';
import Image from "./Mine.JPG";
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false); 
      if (window.scrollY > 0) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <header className={`user ${isMenuOpen ? 'toggle' : ''}`}>
        <div className="user">
          <img src={Image} alt="Dachepalli Sasank" /> 
          <h3 className="name">Dachepalli Sasank</h3>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#education">EDUCATION</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <div id="menu" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={handleMenuClick}></div>

      <section className="home" id="home">
        <h3>HI FRIENDS !</h3>
        <h1>I'M <span>Dachepalli Sasank</span></h1>
      </section>


      {showTopButton && (
        <a href="#home" className="top" onClick={(e) => handleLinkClick(e, '#home')}>
          <img src="images/scroll-top-img.png" alt="" /> 
        </a>
      )}
    </div>
  );
}

export default App;