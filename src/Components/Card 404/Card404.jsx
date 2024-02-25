import React from "react";
import "./card404.css";
import { Link } from "react-router-dom";

const Card404 = () => {
  return (
    <div className="cnp__notfound">
      <div className="cnp__notfound-main">
        <h1 className="cnp__notfound-main_title">
          4o4 Not Found
        </h1>
        <h2 className="cnp__notfound-main_description">
          Oops! You are come to the wrong place!!!
        </h2>
        <div className="cnp__notfound-link">
          {" "}
          <div className="cnp__notfound-main-link">
            <div className="cnp__notfound-main_link-first">
              <Link to="/">
                <a href="">
                  <p>Go To Home</p>
                </a>
              </Link>
            </div>
            <div className="cnp__notfound-main_link-second">
              <Link to="/contact">
                <a href="">
                  <p>Contact Us</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card404;
