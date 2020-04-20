import React from 'react';

import styles from './Grid.module.css';
import Box from './Box/Box';

const Grid = ({ grid }) => {
  console.log(grid);
  return (
    <div className={styles.Grid}>
      {grid.map((col, index) => {
        return (
          <div key={index} className={styles.Column}>
            {col.map((row, i) => (
              <Box key={i} isLive={row} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
