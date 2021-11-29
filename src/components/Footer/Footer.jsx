import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { ImFacebook } from "react-icons/im";
import { GrGooglePlus } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { FaLocationArrow } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="inner-footer">
          <div className="footer-intro">
            <img src={logo} alt="Logo" />
            <h1>Stay in touch</h1>

            <div className="social-links">
              <ImFacebook className="links" />
              <GrGooglePlus className="links" />
              <AiOutlineTwitter className="links" />
              <FiInstagram className="links" />
            </div>
          </div>

          <div className="quick-links">
            <div className="link-heading">
              <h2>Quick Links</h2>
            </div>
            <div className="footer-links">
              <Link className="page-links" to="/">
                Home
              </Link>
              <Link className="page-links" to="/about">
                About
              </Link>
              <Link className="page-links" to="/pricing">
                Pricing
              </Link>
            </div>
          </div>
          <div className="quick-links">
            <div className="link-heading">
              <h2>Hours</h2>
            </div>

            <div className="timing">
              <p>
                Monday: <span>9:00 - 18:00</span>
              </p>
              <p>
                Tuesday: <span>9:00 - 18:00</span>
              </p>
              <p>
                Wednesday: <span>9:00 - 18:00</span>
              </p>
              <p>
                Thursday: <span>9:00 - 18:00</span>
              </p>
              <p>
                Friday: <span>9:00 - 18:00</span>
              </p>
            </div>
          </div>
          <div className="info">
            <div className="link-heading">
              <h2>Contact</h2>
            </div>
            <div className="info-cat">
              <div className="info-status">
                <MdCall className='info-icons'/>
                <span>042 - 456171</span>
              </div>
              <div className="info-status">
                <HiMail className='info-icons'/>
                <span>info@gmail.com</span>
              </div>
              <div className="info-status">
                <FaLocationArrow className='info-icons'/>
                <span>Islamabad, PK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
