import React from "react";
import "./instructioncard.css";

const InstructionCard = () => {
  return (
    <div className="cnp__instruction">
      <h2 className="cnp__instruction-title">Instructions :</h2>
      <p className="cnp__instruction-discription">
        <strong>Warnings: </strong> Follow Instructions Before You Play The Game
      </p>
      <ul className="cnp__instruction-list">
        <li className="cnp__instruction-list-item-one">
          <a href="#first__instruction">How to pick numbers</a>
        </li>
        <li className="cnp__instruction-list-item-two">
          <a href="#second__instruction">How to guess numbers</a>
        </li>
        <li className="cnp__instruction-list-item-three">
          <a href="#third__instruction">How to give answers</a>
        </li>
      </ul>
      <div className="cnp__instruction-main">
        <div className="cnp__instruction-main__one">
          <div
            className="cnp__instruction-main__one-elements"
            id="first__instruction"
          >
            <p>
              <strong>
                <span>I.</span>
              </strong>{" "}
              Pick 4 numbers between 1-9
            </p>
            <ul className="cnp__instruction-main__one-elements-list">
              <li className="cnp__instruction-main__one-elements-list-one">
                Do not repeat one numbers
              </li>
              <li className="cnp__instruction-main__one-elements-list-two">
                Do not use numbers 0
              </li>
            </ul>
          </div>
          <div className="cnp__instruction-main__one-vdieo">
            <span>
              <iframe
                width="600"
                height="300"
                src="https://www.youtube.com/embed/Ijssm6Qv5nE?si=KzMfMMvywDLED0Hp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreenz
              ></iframe>
            </span>
          </div>
        </div>
        <div className="cnp__instruction-main__two">
          <div
            className="cnp__instruction-main__two-elements"
            id="second__instruction"
          >
            <p>
              <strong>
                <span>II.</span>
              </strong>{" "}
              Guess your opponent player numbers
            </p>
            <ul className="cnp__instruction-main__two-elements-list">
              <li className="cnp__instruction-main__two-elements-list-one">
                Do not repeat one numbers
              </li>
              <li className="cnp__instruction-main__two-elements-list-two">
                Do not use numbers 0
              </li>
            </ul>
          </div>
          <div className="cnp__instruction-main__two-vdieo">
            <span>
              <iframe
                width="600"
                height="300"
                src="https://www.youtube.com/embed/Ijssm6Qv5nE?si=KzMfMMvywDLED0Hp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </span>
          </div>
        </div>
        <div className="cnp__instruction-main__three">
          <div
            className="cnp__instruction-main__three-elements"
            id="third__instruction"
          >
            <p>
              <strong>
                <span>III.</span>
              </strong>{" "}
              When your opponent guesses your numbers, You give an answer
            </p>
            <ul className="cnp__instruction-main__three-elements-list">
              <li className="cnp__instruction-main__three-elements-list-one">
                How to give an answer
              </li>
              <div className="cnp__instruction-main__three-elements-list-one__ul">
                <li className="cnp__instruction-main__three-elements-list-one__ul-list-one">
                  Enter the number of numbers that your opponent has guessed in
                  the "<strong>N</strong>" position
                </li>
                <li className="cnp__instruction-main__three-elements-list-one__ul-list-one">
                  If there is a nmbers that your opponent has guessed and it
                  matches the number that you have, Enter the number of place
                  that you got on "<strong>P</strong>"
                </li>
              </div>
            </ul>
          </div>
          <div className="cnp__instruction-main__three-vdieo">
            <span>
              <iframe
                width="600"
                height="300"
                src="https://www.youtube.com/embed/Ijssm6Qv5nE?si=KzMfMMvywDLED0Hp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionCard;
