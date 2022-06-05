import React from 'react';

import styles from './Box.module.css';

const Box = ({ isAlive }) => {
  return (
    <div
      className={[styles.Box, isAlive ? styles.alive : null].join(' ')}
    ></div>
  );
};

export default Box;
