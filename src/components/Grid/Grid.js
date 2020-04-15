import React from 'react';

import styles from './Grid.module.css';
import Box from './Box/Box';

const Grid = () => {
  const grid = Array(10)
    .fill(null)
    .map((col) => (col = Array(5).fill(null)));
  console.log(grid);
  return (
    <div className={styles.Grid}>
      {grid.map((col, index) => {
        return (
          <div key={index} className={styles.Column}>
            {col.map((row, i) => (
              <Box key={i} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
