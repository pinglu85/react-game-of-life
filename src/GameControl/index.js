import Button from './Button';
import iconPlay from '../assets/icons/play.svg';
import iconPause from '../assets/icons/pause.svg';
import iconNext from '../assets/icons/next.svg';
import iconPrev from '../assets/icons/prev.svg';
import styles from './styles.module.css';

const GameControl = ({ start, pause, isPlay }) => {
  return (
    <div className={styles.GameControl}>
      <Button>
        <img src={iconPrev} alt="Prev" />
      </Button>
      <Button>
        <img src={iconNext} alt="Next" />
      </Button>
      {!isPlay ? (
        <Button clicked={start}>
          <img src={iconPlay} alt="Play" />
        </Button>
      ) : (
        <Button clicked={pause}>
          <img src={iconPause} alt="Pause" />
        </Button>
      )}
    </div>
  );
};

export default GameControl;
