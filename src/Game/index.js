import { useState, useEffect } from 'react';

import applyRules from './applyRules';
import gliderGun from './presetPatterns/gliderGun';
import Grid from '../Grid';
import GameControl from '../GameControl';
import styles from './styles.module.css';

const initialGrid = Array.from({ length: 32 }, () => new Array(60).fill(0));
gliderGun(initialGrid);

const Game = () => {
  const [grid, setGrid] = useState(initialGrid);
  const [count, setCount] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

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
      <GameControl start={handleStart} pause={handlePause} isPlay={isPlay} />
      <Grid grid={grid} />
      <div className={styles.Generation}>
        <p>generation: {count}</p>
      </div>
    </div>
  );
};

export default Game;
