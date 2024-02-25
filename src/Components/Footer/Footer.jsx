import React from "react";
import "./footer.css";
import Banner from "../../assets/images/banner.png";
import dot from "../../assets/icons/dot.svg";
import link from "../../assets/icons/link.svg";
import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="cnp__footer">
        <div className="cnp__footer-main">
          <div className="cnp__footer__main-img">
            <div className="cnp__footer-main-listone">
              <img src={Banner} alt="banner" className="footer__img" />
              <h2>Play Our Game</h2>
            </div>
          </div>
          <div className="cnp__footer__main-list">
            {/* <div className="cnp__footer-main-listtwo">
              <h2 className="footer__list-title">Links</h2>
              <div className="cnp__footer-main-listone__lists">
                <ul>
                  <li>
                    <span>
                      <img
                        src={dot}
                        className="cnp__footer-main-listone__lists-img"
                        alt=""
                      />
                    </span>
                    <Link to="/" onClick={scrollToTop}>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <span>
                      <img
                        src={dot}
                        className="cnp__footer-main-listone__lists-img"
                        alt=""
                      />
                    </span>
                    <Link to="/play" onClick={scrollToTop}>
                      <a>Play</a>
                    </Link>
                  </li>
                  <li>
                    <span>
                      <img
                        src={dot}
                        className="cnp__footer-main-listone__lists-img"
                        alt=""
                      />
                    </span>
                    <Link to="/instruction" onClick={scrollToTop}>
                      <a>Instruction</a>
                    </Link>
                  </li>
                  <li>
                    <span>
                      <img
                        src={dot}
                        className="cnp__footer-main-listone__lists-img"
                        alt=""
                      />
                    </span>
                    <Link to="/contact" onClick={scrollToTop}>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="cnp__footer-main-listthree">
              <h2 className="footer__list-title">Help</h2>
              <div className="cnp__footer-main-listtwo__lists">
                <ul>
                  <li>
                    <span className="footer__help-icon-one">
                      <img
                        src={link}
                        className="cnp__footer-main-listtwo__lists-img"
                        alt=""
                      />
                    </span>
                    <Link to="/instruction" onClick={scrollToTop}>
                      <a>How to play</a>
                    </Link>
                  </li>
                  <li>
                    <span className="footer__help-icon-two">
                      <img
                        src={link}
                        className="cnp__footer-main-listtwo__lists-img"
                        alt=""
                      />
                    </span>
                    <Link to="/instruction" onClick={scrollToTop}>
                      <a>How to pick numbers</a>
                    </Link>
                  </li>
                  <li>
                    <span className="footer__help-icon-three">
                      <img
                        src={link}
                        className="cnp__footer-main-listtwo__lists-img"
                        alt=""
                      />
                    </span>
                    <Link to="/instruction" onClick={scrollToTop}>
                      <a>How to guess the opponent player's numbers</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cnp__footer-main-listfour">
              <h2 className="footer__list-title">Contact</h2>
              <div className="cnp__footer-main-listthree__lists">
                <ul>
                  <li>
                    <div className="li1">
                      <span className="footer__contact-icon-address">
                        <img src={location} alt="location" />
                      </span>
                    </div>
                    <div className="li2">
                      <strong className="footer__contact-text-address">
                        <b>Address :</b>
                      </strong>
                      <p>
                        <b> Addis Ababa, Asko, Ethiopia</b>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="li1">
                      <span className="footer__contact-icon-phone">
                        <img src={phone} alt="location" />{" "}
                      </span>
                    </div>
                    <div className="li2">
                      <strong>
                        <b>Phone :</b>
                      </strong>
                      <p>
                        <b> +251 993 155 186</b>
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="li1">
                      <span className="footer__contact-icon-mail">
                        <img src={email} alt="location" />{" "}
                      </span>
                    </div>
                    <div className="li2">
                      <strong>
                        <b>email :</b>
                      </strong>
                      <p class="footer__contact-icon-mail__link">
                        <a
                          href="https://hamza​.suleyman09​@gmail​.com"
                          rel="noopener"
                          target="_blank"
                        >
                          <b>hamza​.suleyman09​@gmail​.com</b>
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
