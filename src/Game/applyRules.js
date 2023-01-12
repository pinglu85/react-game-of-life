function applyRules(grid) {
  return grid.map((row, rowIdx) => {
    return row.map((col, colIdx) => {
      // nw, n, ne
      // w,  x,  e
      // sw, s, se
      const nw = getColValue(grid, rowIdx - 1, colIdx - 1);
      const n = getColValue(grid, rowIdx - 1, colIdx);
      const ne = getColValue(grid, rowIdx - 1, colIdx + 1);
      const w = row[colIdx - 1] ?? 0;
      const e = row[colIdx + 1] ?? 0;
      const sw = getColValue(grid, rowIdx + 1, colIdx - 1);
      const s = getColValue(grid, rowIdx + 1, colIdx);
      const se = getColValue(grid, rowIdx + 1, colIdx + 1);
      const neighborsSum = nw + n + ne + w + e + sw + s + se;

      if (col === 1 && (neighborsSum === 2 || neighborsSum === 3)) {
        return 1;
      }

      if (col === 0 && neighborsSum === 3) {
        return 1;
      }

      return 0;
    });
  });
}

function getColValue(grid, rowIdx, colIdx) {
  if (rowIdx < 0 || rowIdx >= grid.length) return 0;

  if (colIdx < 0 || colIdx >= grid[0].length) return 0;

  return grid[rowIdx][colIdx];
}

export default applyRules;
