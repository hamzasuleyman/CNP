import React, { useState } from "react";
import "./header.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Other head elements can be added here */}
      </head>
      <div>
        <div className="header-container">
          <div className="header">
            <div className="main-first">
              <Link to="/">
                <div className="logo">
                  <img src={Logo} alt="logo" className="logo_img" />
                </div>
              </Link>
            </div>
            <div>
              <div className="main-second">
                <div className="detail">
                  <Link to="/">
                    <a href="">Home</a>
                  </Link>{" "}
                  <Link to="/play">
                    <a href="">Play</a>
                  </Link>{" "}
                  <Link to="/instruction">
                    <a href="">Instructions</a>
                  </Link>
                  <Link to="/contact">
                    <a href="">Contact</a>
                  </Link>{" "}
                </div>
              </div>
            </div>

            <div className="cnp__navbar-menu">
              {toggleMenu ? (
                <RiCloseLine
                  color="#fff"
                  size={27}
                  onClick={() => setToggleMenu(false)}
                />
              ) : (
                <RiMenu3Line
                  color="#fff"
                  size={27}
                  onClick={() => setToggleMenu(true)}
                />
              )}
              {toggleMenu && (
                <div className="cnp__header__menu">
                  <div className="menu-detail">
                    <Link to="/">
                      <a href="">Home</a>
                    </Link>{" "}
                    <Link to="/play">
                      <a href="">Play</a>
                    </Link>{" "}
                    <Link to="/instruction">
                      <a href="">Instructions</a>
                    </Link>
                    <Link to="/contact">
                      <a href="">Contact</a>
                    </Link>{" "}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
