const parensAreBalanced = (input) => {
  // let stack = [];
  // let map = {
  //     '(': ')',
  //     '[': ']',
  //     '{': '}'
  // }

  // for (let i = 0; i < str.length; i++) {


  //     if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
  //         stack.push(str[i]);
  //     }

  //     else {
  //         let last = stack.pop();

          
  //         if (str[i] !== map[last]) {
  //             return false
  //         };
  //     }
  let inputSplt = input.split("");
  return !inputSplt.reduce((prevChar, currChar) => {
    if (currChar === "(" || currChar === "{" || currChar === "[") {
      return ++prevChar;
    } else if (currChar === ")" || currChar === "}" || currChar === "]") {
      return --prevChar;
    }
    return prevChar;
  }, 0);
  }
  
      if (stack.length !== 0) {
          
          return false
      };

  return true;
}

module.exports = parensAreBalanced
