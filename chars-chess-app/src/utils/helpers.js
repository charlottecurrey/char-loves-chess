export const getSquareColor = (row, col) => {
  const isEven = (row + col) % 2 === 0;
  return isEven ? "#f0d9b5" : "#b58863";
};
