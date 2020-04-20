import React, { useState, useEffect } from 'react';
import applyRules from '../../utils/applyRules';
import gilderGun from '../../presetPatterns/gilderGun';
import Grid from '../../components/Grid/Grid';
import styles from './Game.module.css';

const gridArray = Array(60)
  .fill(null)
  .map(() => Array(32).fill(0));

const Game = () => {
  const [grid, setGrid] = useState(gridArray);
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const gilderGunGrid = gilderGun([...grid], 60);
    setGrid(gilderGunGrid);
  }, []);

  useEffect(() => {
    const timer = play
      ? setInterval(() => {
          setCount((count) => count + 1);
          setGrid((grid) => applyRules(grid));
        }, 350)
      : null;
    if (!play) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [play]);

  const handleStart = () => {
    setPlay(true);
  };

  const handleStop = () => {
    setPlay(false);
  };

  return (
    <div>
      <Grid grid={grid} />
      <div className={styles.Generation}>
        <p>generation: {count}</p>
      </div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};

export default Game;
