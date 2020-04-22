import React, { useState, useEffect } from 'react';
import applyRules from '../../utils/applyRules';
import gliderGun from '../../presetPatterns/gliderGun';
import Grid from '../../components/Grid/Grid';
import GameInterface from '../../components/UI/GameInterface';
import styles from './Game.module.css';

const gridArray = Array(60)
  .fill(null)
  .map(() => Array(32).fill(0));

const Game = () => {
  const [grid, setGrid] = useState(gridArray);
  const [count, setCount] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    const gilderGunGrid = gliderGun([...grid], 60);
    setGrid(gilderGunGrid);
  }, []);

  useEffect(() => {
    const timer = isPlay
      ? setInterval(() => {
          setCount((count) => count + 1);
          setGrid((grid) => applyRules(grid));
        }, 350)
      : null;
    if (!isPlay) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isPlay]);

  const handleStart = () => {
    setIsPlay(true);
  };

  const handlePause = () => {
    setIsPlay(false);
  };

  return (
    <div>
      <GameInterface start={handleStart} pause={handlePause} isPlay={isPlay} />
      <Grid grid={grid} />
      <div className={styles.Generation}>
        <p>generation: {count}</p>
      </div>
    </div>
  );
};

export default Game;
