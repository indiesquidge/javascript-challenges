const parensAreBalanced = (str) => {
  ///////  Balanced Parentheses
  const parensAreBalanced = (str) => {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
        else {
            let last = stack.pop();
            if (str[i] !== map[last]) {
                return false
            };
        }
    }
        if (stack.length !== 0) {
            return false
        };
    return true;
  };
  console.log (parensAreBalanced("(){}"));
  console.log (parensAreBalanced('{}'));

  
  
  
  
  
  
  /*let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
        else {
            let last = stack.pop();
            if (str[i] !== map[last]) {
                return false
            };
        }
    }
        if (stack.length !== 0) {
            return false
        };
    return true;
}

module.exports = parensAreBalanced
*/