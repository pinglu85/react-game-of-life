function applyRules(grid) {
  return grid.map((col, colIndex) =>
    col.map((row, rowIndex) => {
      // 1, 2, 3
      // 4, x, 5
      // 6, 7, 8
      const nbrOne =
        colIndex - 1 >= 0 && rowIndex - 1 >= 0
          ? grid[colIndex - 1][rowIndex - 1]
          : 0;
      const nbrTwo = rowIndex - 1 >= 0 ? col[rowIndex - 1] : 0;
      const nbrThree =
        colIndex + 1 < grid.length && rowIndex - 1 >= 0
          ? grid[colIndex + 1][rowIndex - 1]
          : 0;
      const nbrFour = colIndex - 1 >= 0 ? grid[colIndex - 1][rowIndex] : 0;
      const nbrFive =
        colIndex + 1 < grid.length ? grid[colIndex + 1][rowIndex] : 0;
      const nbrSix =
        colIndex - 1 >= 0 && rowIndex + 1 < col.length
          ? grid[colIndex - 1][rowIndex + 1]
          : 0;
      const nbrSeven = rowIndex + 1 < col.length ? col[rowIndex + 1] : 0;
      const nbrEight =
        colIndex + 1 < grid.length && rowIndex + 1 < col.length
          ? grid[colIndex + 1][rowIndex + 1]
          : 0;
      const nbrSum =
        nbrOne +
        nbrTwo +
        nbrThree +
        nbrFour +
        nbrFive +
        nbrSix +
        nbrSeven +
        nbrEight;
      if (row === 1 && (nbrSum === 2 || nbrSum === 3)) {
        return 1;
      } else if (row === 0 && nbrSum === 3) {
        return 1;
      } else {
        return 0;
      }
    })
  );
}

export default applyRules;
