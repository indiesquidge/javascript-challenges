const mostRecurrent = (set) => {
  set.sort()
  const n = set.length
  let current = set[0]
  let mostRec = current
  let count = 1
  let maxCount = 1
  for (let i = 1; i < n; i++) {
    const element = set[i]
    if (element !== current) {
      count = 1
      current = element
      continue
    }
    count++
    if (count > maxCount) {
      maxCount = count
      mostRec = current
    }
  }
  return mostRec
}

module.exports = mostRecurrent
