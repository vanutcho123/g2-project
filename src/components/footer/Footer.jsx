import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__heading">
          You have questions? Contact us, me.
        </div>
        <div className="footer__list">
          <ul>
            <li>
              <a href="/" className="footer_link">
                FAQ
              </a>
            </li>
            <li>
              <a href="/" className="footer_link">
                Investor relations
              </a>
            </li>
            <li>
              <a href="/" className="footer_link">
                Privacy
              </a>
            </li>
            <li>
              <a href="/" className="footer_link">
                Speed Test
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/" className="footer_link">
                Help Center
              </a>
            </li>
            <li>
              <a href="/" className="footer_link">
                Jobs
              </a>
            </li>
            <li>
              <a href="/" className="footer_link">
                Cookie Preferences
              </a>
            </li>
            <li>
              <a href="/" className="footer_link">
                Legal Notices
              </a>
            </li>
          </ul>
          <div className="footer__logo">
            <p>G2-FILM</p>
            <div>
              <input type="text" name="" placeholder="Email " id="" />
              <input type="submit" value="->" />
            </div>
          </div>
          <ul>
            <li>
              <a href="/" className="footer_link">
                Account
              </a>
            </li>
            <li>
              <a href="/" className="footer_link">
                Ways to Watch
              </a>
            </li>
            <li>
              <a href="/" className="footer_link">
                Corporate Information
              </a>
            </li>
            <li>
              <a href="/" className="footer_link">
                Only on G2film
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/" className="footer_link">
                Media Center
              </a>
            </li>
            <li>
              <a href="/" className="footer_link">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="/" className="footer_link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        Create by G2-TEAM| 2021 All Right reserved.
      </div>
    </div>
  );
};

export default Footer;
