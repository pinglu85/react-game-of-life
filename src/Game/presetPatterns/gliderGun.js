function gliderGun(grid) {
  const startColIdx = Math.floor((grid[0].length - 36) / 2);

  grid[7][startColIdx + 24] = 1;

  grid[8][startColIdx + 22] = 1;
  grid[8][startColIdx + 24] = 1;

  grid[9][startColIdx + 12] = 1;
  grid[9][startColIdx + 13] = 1;
  grid[9][startColIdx + 20] = 1;
  grid[9][startColIdx + 21] = 1;
  grid[9][startColIdx + 34] = 1;
  grid[9][startColIdx + 35] = 1;

  grid[10][startColIdx + 11] = 1;
  grid[10][startColIdx + 15] = 1;
  grid[10][startColIdx + 20] = 1;
  grid[10][startColIdx + 21] = 1;
  grid[10][startColIdx + 34] = 1;
  grid[10][startColIdx + 35] = 1;

  grid[11][startColIdx] = 1;
  grid[11][startColIdx + 1] = 1;
  grid[11][startColIdx + 10] = 1;
  grid[11][startColIdx + 16] = 1;
  grid[11][startColIdx + 20] = 1;
  grid[11][startColIdx + 21] = 1;

  grid[12][startColIdx] = 1;
  grid[12][startColIdx + 1] = 1;
  grid[12][startColIdx + 10] = 1;
  grid[12][startColIdx + 14] = 1;
  grid[12][startColIdx + 16] = 1;
  grid[12][startColIdx + 17] = 1;
  grid[12][startColIdx + 22] = 1;
  grid[12][startColIdx + 24] = 1;

  grid[13][startColIdx + 10] = 1;
  grid[13][startColIdx + 16] = 1;
  grid[13][startColIdx + 24] = 1;

  grid[14][startColIdx + 11] = 1;
  grid[14][startColIdx + 15] = 1;

  grid[15][startColIdx + 12] = 1;
  grid[15][startColIdx + 13] = 1;
}

export default gliderGun;
