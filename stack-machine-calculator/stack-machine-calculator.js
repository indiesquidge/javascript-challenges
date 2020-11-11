const stackMachineCalculator = (instructions) => {
  let stack = [];
  let num = instructions.split("");

  for(let i = 0; i < num.length; i++) {
    switch(num[i]) {
      case "+" : 
      stack.push(stack.pop() + stack.pop());
      break;

      case "-" : 
      stack.push(stack.pop() - stack.pop());
      break;

      case "*" : 
      stack.push(stack.pop() * stack.pop());
      break;

      case "/" : 
      stack.push(stack.pop() / stack.pop());
      break;

      default: stack.push(parseInt(num[i]));
    }
  }
  return stack.pop();
}

module.exports = stackMachineCalculator