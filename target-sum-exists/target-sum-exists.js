const targetSumExistsInTwoNumbers = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length; j++) {
      if (list[i] + list[j] === target) {
        return true
      } else {
        return false
      }
    }
  }
}

const targetSumExistsInThreeNumbers = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length; j++) {
      if (list[i] + list[j] === target) {
        return true
      } else {
        return false
      }
    }
  }
}

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
}
