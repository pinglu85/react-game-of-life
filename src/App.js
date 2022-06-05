import Game from './containers/Game';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Conway's Game of Life</h1>
      <Game />
    </div>
  );
}

export default App;
