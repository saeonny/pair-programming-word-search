const transpose = function (matrix) {
  let newArray = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (!newArray[col]) {
        newArray[col] = [];
      }
      newArray[col].push(matrix[row][col]);
    }
  }
  return newArray;
};

const wordSearch = (letters, word) => {
  const transposedLetters = transpose(letters);

  const search = (wordArray) => {
    const horizontalJoin = wordArray.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    return false;
  };

  if (search(letters)) {
    return true;
  } else if (search(transposedLetters)) {
    return true;
  }
  return false;
};

module.exports = wordSearch;