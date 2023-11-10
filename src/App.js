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
      <header>
        <div className="user">
          <img src={Image} alt="Dachepalli Sasank" />
          <h3 className="name">Dachepalli Sasank</h3>
        </div>
        <nav className="navbar">
          <ul className="nav">
            <li className='navlink'><a href="#home">HOME</a></li>
            <li className='navlink'><a href="#skills">SKILLS</a></li>
            <li className='navlink'><a href="#education">EDUCATION</a></li>
            <li className='navlink'><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <div id="menu" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={handleMenuClick}></div>

      <section className="home" id="home">
        <h3>HELLO!!</h3>
        <h1>This is <span>Dachepalli Sasank</span></h1>
      </section>

      <section className="skills" id="skills">
        <h1 className="heading"> <span>My</span> Skills </h1>
        <div className="row">
          <div className="info">
            <h3>Java</h3>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>JAVASCRIPT</h3>
            <h3>AWS Cloud</h3>
            <h3>MERN Stack</h3>
            <h3>Android Studio</h3>
            <h3>SQL</h3>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h1 className="heading"> Education <span>Details</span> </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2018-2019</span>
            <h3>SSC</h3>
            <p style={{ fontSize: '20px' }}>Dr Besant School</p>
            <h3>10.0 GPA</h3>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2019-2021</span>
            <h3>Intermediate</h3>
            <h3>MPC</h3>
            <p style={{ fontSize: '20px' }}>NRI Junior College</p>
            <h3>95.4%</h3>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2021-2025</span>
            <h3>B.Tech</h3>
            <p style={{ fontSize: '20px' }}>VIT AP University</p>
            <h3>8.87 CGPA</h3>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading"> <span>contact</span> me </h1>
        <div className="row">
          <div className="content">
            {/* <h3 className="title">contact info</h3> */}
            <div className="info">
              <h3> <i className="fas fa-envelope"></i> sasankkrishnadachepalli@gmail.com</h3>
              <h3> <i className="fas fa-phone"></i> 9898989899 </h3>
              <h3> <a href="https://www.linkedin.com/in/dachepalli-sasank-7077a3282/">LinkedIn</a></h3>
              <h3> <a href="https://github.com/SasankDachepalli">GitHub</a></h3>
              {/* <h3><span>https://www.linkedin.com/in/dachepalli-sasank-7077a3282/</span></h3>
              <h3>https://github.com/SasankDachepalli"</h3> */}
            </div>
          </div>
        </div>
      </section>

      {showTopButton && (
        <a href="#home" className="top" onClick={(e) => handleLinkClick(e, '#home')}>
          <img src={Image} alt="" />
        </a>
      )}
    </div>
  );
}

export default App;