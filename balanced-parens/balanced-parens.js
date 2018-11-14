const parensAreBalanced = (input) => {
  return (input.match(/\(/g) || []).length === (input.match(/\)/g) || []).length
}

module.exports = parensAreBalanced
