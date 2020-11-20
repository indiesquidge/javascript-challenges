const squareRoot = (radicand) => {
  for (let i = radicand; i >= 1; i--) {
    if (i * i == radicand) {
      radicand = i;
      break;
    }
  }
  return radicand

}

module.exports = squareRoot
