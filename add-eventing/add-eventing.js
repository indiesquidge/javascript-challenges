const addEventing = (obj) => {
  return Object.assign({}, obj, {
    on: () => {},
    trigger: () => {}
  })
}

module.exports = addEventing
