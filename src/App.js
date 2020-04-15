import React from 'react';

import styles from './App.module.css';
import Game from './containers/Game/Game';

function App() {
  return (
    <div className={styles.App}>
      <header>
        <h1>The Game of Life</h1>
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
}

export default App;
