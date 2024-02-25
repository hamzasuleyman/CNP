import React, { useState } from "react";
import PlayCard from "./PlayCard";

function Play() {
  const [playerNumber, setPlayerNumber] = useState(null);
  const [computerNumber, setComputerNumber] = useState(null);

  const handlePlayerPick = (pickedNumbers) => {
    setPlayerNumber(pickedNumbers);

    if (pickedNumbers.length === 4) {
      const computerNumbers = generateComputerNumbers();
      setComputerNumber(computerNumbers);
    }
  };

  const generateComputerNumbers = () => {
    const pickedNumbers = [];
    while (pickedNumbers.length < 4) {
      const randomNumber = generateNumber();
      pickedNumbers.push(randomNumber);
    }
    return pickedNumbers.join("");
  };

  const generateNumber = () => {
    let number;
    do {
      number = Math.floor(Math.random() * 9) + 1;
    } while (hasDigitFour(number));

    return number;
  };

  const hasDigitFour = (num) => {
    return num.toString().includes("4");
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <PlayCard
        onPlayerPick={handlePlayerPick}
        playerNumber={playerNumber}
        computerNumber={computerNumber}
      />
      <div>
        <p>Player's Number: {playerNumber}</p>
        <p>Computer's Number: {computerNumber}</p>
      </div>
    </div>
  );
}

export default Play;
