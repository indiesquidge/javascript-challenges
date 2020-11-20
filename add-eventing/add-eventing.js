const addEventing = function (obj) {
    obj.on = (eventName, fn) => {
        if (events[eventName]) {
          events[eventName].push(fn)
        } else {
          events[eventName] = [fn]
        }
      }
    
      obj.trigger = (eventName, ...args) => {
        events[eventName].forEach(fn => fn(...args))
      }
    
      return obj
  
  

}

module.exports = addEventing
