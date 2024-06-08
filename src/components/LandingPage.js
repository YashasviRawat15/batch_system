import React from 'react';
import './LandingPage.css';
import img_1 from "./images/iPhone_img1.png";
import img_2 from "./images/iPhone_img2.png";
import img3 from "./images/img3.png";
import star from "./images/star.png"
import rings from "./images/rings.png"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFire, faArrowRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo"> <FontAwesomeIcon icon={faFire} style={{color: "#ff5555",}} /> uifry</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#features">Features</a></li>
        </ul>
        <button className="cta-button download">Download</button>
      </nav>
      <section id="hero" className="hero">
        <div className="content">
          <h1 className="title ring">Make The Best Financial Decisions</h1>
          <p className="subtitle gradient-text-container" >Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          <div className="buttons">
            <button className="cta-button">Get Started <FontAwesomeIcon icon={faArrowRight}  style={{color: "#ffffff",}} /></button>
            <button className="video-button"><FontAwesomeIcon icon={faCirclePlay}  style={{color: "#000000",}} /> Watch Video</button>
          </div>
        </div>
        <div className="hero-image">
        <img src={rings} className='ring1' alt="rings" />
          <img src={img_1} className='img1' alt="MobileImage" />
          <img src={img_2} className='img2' alt="MobileImage" />
          <img src={img_1} className='img3' alt="MobileImage" />
        </div>
        <div className='next-image'>
        <img src={img3} className='image' alt="img"/>
        </div>
      </section>
      
    </div>
  );
};

export default LandingPage;
