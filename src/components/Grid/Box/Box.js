import React from 'react';

import styles from './Box.module.css';

const Box = ({ isLive }) => {
  return (
    <div className={[styles.Box, isLive ? styles.live : null].join(' ')}></div>
  );
};

export default Box;
