import React, { useState } from "react";
import "./playcard.css";

function PlayCard() {
  const [count, setCount] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [pick, setPick] = useState("");
  const [playerNumbers, setPlayerNumbers] = useState([]);

  const handleCountChange = (event) => {
    const inputValue = event.target.value.replace(/[^1-9]/g, "").slice(0, 4);
    const uniqueDigits = new Set(inputValue.split(""));

    const newValue = Array.from(uniqueDigits).join("");

    setCount(newValue);
  };

  const pickyournumber = (event) => {
    const inputValue = event.target.value.replace(/[^1-9]/g, "").slice(0, 4);
    const uniqueDigits = new Set(inputValue.split(""));

    const newValue = Array.from(uniqueDigits).join("");

    setPick(newValue);
  };

  const handleNumberChange = (event) => {
    const value = event.target.value.replace(/[^0-4]/g, "").slice(0, 1);
    setNumber(value);
  };

  const handlePositionChange = (event) => {
    let value = event.target.value.replace(/[^0-4]/g, "").slice(0, 1);
    setPosition(value);
  };

  const generateComputerNumbers = () => {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let randomNumber = "";

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      const randomDigit = digits.splice(randomIndex, 1)[0];
      randomNumber += randomDigit;
    }

    console.log("Player's Numbers :", pick);
    console.log("Computer's Number: " + randomNumber);
  };

  const handleSendButtonClick = () => {
    // Assuming you want to add the current player's numbers to the array
    const currentNumbers = {
      count,
      number,
      position,
      pick,
    };

    setPlayerNumbers([...playerNumbers, currentNumbers]);
  };

  const picked = () => {
    generateComputerNumbers();
    handleSendButtonClick();
  };

  let PlayerPickedNumbers = pick;

  let playerGuessedCount = count;
  let playerGuessedNumber = number;
  let playerGuessedPositions = position;

  // let ComputerPickedNumbers = pick;

  // let ComputerGuessedCount = count;
  // let ComputerGuessedNumber = number;
  // let ComputerGuessedPositions = position;

  return (
    <div className="cnp__play">
      <h2 className="cnp__play-title">Game Page</h2>
      <div className="cnp__play-second__input">
        <h3>Pick Your Numbers</h3>
        <div className="cnp__play-second__input-first">
          <input
            type="text"
            placeholder="Pick your Number"
            value={pick}
            onChange={pickyournumber}
          />
          <button
            className="cnp__play-second__input-first__btn"
            onClick={picked}
          >
            Picked
          </button>
        </div>
      </div>
      <div className="cnp__play-main">
        <div className="cnp__play-main__input">
          <div className="cnp__play-main__input-first">
            <h3>C</h3>
            <input
              type="text"
              placeholder="Count"
              value={count}
              onChange={handleCountChange}
            />
          </div>
          <div className="cnp__play-main__input-second">
            <h3>N</h3>
            <input
              type="text"
              placeholder="Number"
              value={number}
              onChange={handleNumberChange}
            />
          </div>
          <div className="cnp__play-main__input-third">
            <h3>P</h3>
            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={handlePositionChange}
            />
          </div>
        </div>
        <div className="cnp__play-main-fourth">
          <button className="cnp__play-main-fourth-btn" onClick="">
            Auto Fill
          </button>
        </div>
        <div className="cnp__play-main__submit">
          <div className="cnp__play-main__submit__main">
            <button className="cnp__play-main__submit__main-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayCard;
