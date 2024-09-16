import React, { useState } from 'react';

const CoinToss = ({ onToss }) => {
  const [result, setResult] = useState("");

  // Single coin toss
  const tossCoin = () => {
    const toss = Math.random() < 0.5 ? "Heads" : "Tails";
    setResult(toss);
    onToss(1, toss === "Heads" ? 1 : 0, toss === "Tails" ? 1 : 0); // Pass result to parent
  };

  // Toss 100 coins at once
  const toss100Coins = () => {
    let newHeads = 0;
    let newTails = 0;

    for (let i = 0; i < 100; i++) {
      const toss = Math.random() < 0.5 ? "Heads" : "Tails";
      if (toss === "Heads") newHeads++;
      else newTails++;
    }

    setResult(`Tossed 100 coins!`);
    onToss(100, newHeads, newTails); // Pass 100 toss results
  };

  return (
    <div>
      <button onClick={tossCoin}>Toss Coin</button>
      <button onClick={toss100Coins}>Toss 100 Coins</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default CoinToss;
