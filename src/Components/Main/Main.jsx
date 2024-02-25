import React from "react";
import "./main.css";
import star from "../../assets/icons/star.svg";
import { Link } from "react-router-dom";

const Main = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="cnp__main">
        <p className="cnp__main-title">Play our Game</p>
        <div className="heroContainer">
          <div className="heroContentContainer">
            <marquee>
              <h1 className="heroHeading">
                Embark on a Challenge with CNP Game
              </h1>
            </marquee>
            <p className="heroParagraph">
              Welcome to the thrilling world of CNP Game – a strategic showdown
              where your number skills and intuition are put to the ultimate
              test! Challenge yourself or go head-to-head against a friend in
              this exciting numerical faceoff. Choose your numbers wisely,
              anticipating your opponent's moves, and brace yourself for victory
              or defeat.
            </p>
            <Link to="/play">
              <button className="heroButton">Play 🎮</button>
            </Link>
          </div>
        </div>
        <div className="cnp__main-second">
          <h2 className="heroHeading">How to Play:</h2>
          <div className="cnp__main-second__Paragraph">
            <span>
              <img src={star} alt="" />
            </span>
            <p>
              Each player selects two numbers, N and P, in an attempt to
              outsmart their adversary. Win by matching your opponent's choices
              or str ategically position your numbers for a thrilling win. But
              beware, a single miscalculation could lead to a challenging
              defeat!
            </p>
          </div>
        </div>
        <div className="cnp__main-third">
          <h2 className="heroHeading">Features:</h2>
          <p className="heroParagraph">
            <ul className="heroParagraph__ul">
              <li>
                Engaging Two-Player Mode: Compete against a friend and see who
                truly has the sharper instincts.
              </li>
              <li>
                Solo Showdown:Test your skills against the computer for a
                single-player challenge.
              </li>
              <li>
                Quick and Intuitive: Easy-to-understand rules make CNP Game
                accessible to players of all ages.
              </li>
              <li>
                Endless Strategies: Unleash your strategic prowess and devise
                clever tactics to secure victory.
              </li>
            </ul>
          </p>
          <div className="heroParagraph__ul-hr" />
        </div>
        <div className="cnp__main-fourth">
          <h2 className="heroHeading">Meanwhile, Here's a Game Tip:</h2>
          <div className="cnp__main-second__Paragraph second">
            <span>
              <img src={star} alt="" />
            </span>
            <p>
              The secret to navigating the digital wilderness? Always carry a
              spare calculator!
            </p>
          </div>
          <h2 className="heroHeading">Still Lost?</h2>
          <div className="cnp__main-second__Paragraph second">
            <span>
              <img src={star} alt="" />
            </span>
            <p>
              Don't worry; even the best explorers find themselves in unexpected
              places. If you continue to wander,{" "}
              <Link to="/contact" onClick={scrollToTop}>
                <a href="">contact us</a>
              </Link>{" "}
              for a virtual compass.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
