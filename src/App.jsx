import React, { useState } from 'react';
import './App.css';
import CoinToss from './CoinToss';
import Graph from './Graph';

function App() {
  const [totalHeads, setTotalHeads] = useState(0);
  const [totalTosses, setTotalTosses] = useState(0);

  const handleToss = (tosses, heads) => {
    setTotalHeads(totalHeads + heads);
    setTotalTosses(totalTosses + tosses);
  };

  return (
    <div className="App">
      <h1>Coin Toss Simulation</h1>
      <CoinToss onToss={handleToss} />
      <p>Total Tosses: {totalTosses}</p>
      <p>Total Heads: {totalHeads}, Total Tails: {totalTosses - totalHeads}</p>
      <Graph headsCount={totalHeads} totalTosses={totalTosses} />
    </div>
  );
}

export default App;
