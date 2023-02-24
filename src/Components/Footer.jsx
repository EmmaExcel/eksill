import React from "react";
import "./Footer.css";
import eskill from '../images/logo/Group4.png';
import laptop from '../images/laptop.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import bein from '../images/bein.png'
const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer">
          <div className="footer-content">
            <div className="footer-header">
              <p>
                Want to be an instrutor at
                <img src={eskill}  /> ?
              </p>
            </div>

            <div className="input-container">
              <input type="text" placeholder="Enter your email" />

              <button className="submit">Apply</button>
            </div>

            <div className="underline"></div>

            <div className="eskill-ending">
              <img src={eskill} />
            </div>

            <div className="copyright">
              <p>Copyright 2022 <span>E</span> Skill | All rights reserved</p>
            </div>

            <div className="social-links">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
              <img src={bein} alt="" />
            </div>
          </div>
          <div className="footer-img">
            <img src={laptop} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
