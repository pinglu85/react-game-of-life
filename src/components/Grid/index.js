import Box from './Box';
import styles from './styles.module.css';

const Grid = ({ grid }) => {
  console.log(grid);
  return (
    <div className={styles.Grid}>
      {grid.map((row, rowIdx) =>
        row.map((col, colIdx) => <Box key={colIdx} isAlive={col} />)
      )}
    </div>
  );
};

export default Grid;
