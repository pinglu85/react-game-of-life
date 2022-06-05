import styles from './styles.module.css';

const Box = ({ isAlive }) => {
  return (
    <div className={[styles.Box, isAlive ? styles.alive : ''].join(' ')}></div>
  );
};

export default Box;
