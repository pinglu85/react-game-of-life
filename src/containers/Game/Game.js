import React, { useState, useEffect } from 'react';
import applyRules from '../../utils/applyRules';
import gliderGun from '../../presetPatterns/gliderGun';
import Grid from '../../components/Grid/Grid';
import Button from '../../components/UI/Button/Button';
import styles from './Game.module.css';

const gridArray = Array(60)
  .fill(null)
  .map(() => Array(32).fill(0));

const Game = () => {
  const [grid, setGrid] = useState(gridArray);
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const gilderGunGrid = gliderGun([...grid], 60);
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
      <div>
        <Button clicked={handleStart}>start</Button>
        <Button clicked={handleStop}>stop</Button>
      </div>
      <Grid grid={grid} />
      <div className={styles.Generation}>
        <p>generation: {count}</p>
      </div>
    </div>
  );
};

export default Game;
