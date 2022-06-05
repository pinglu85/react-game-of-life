import styles from './styles.module.css';

const Button = ({ clicked, children }) => {
  return (
    <button className={styles.Btn} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
