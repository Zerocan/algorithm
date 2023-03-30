/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const list = [];
  const operator = ['+', '-', '*', '/'];
  for (let token of tokens) {
    if (operator.includes(token)) {
      const num1 = Number(list.pop());
      const num2 = Number(list.pop());
      switch (token) {
        case '+':
          list.push(num1 + num2);
          break;
        case '-':
          list.push(num2 - num1);
          break;
        case '*':
          list.push(num1 * num2);
          break;
        case '/':
          list.push(parseInt(num2 / num1));
          break;
        default:
          break;
      }
    } else {
      list.push(token);
    }
  }
  return list[0];
};

console.log('evalRPN', evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
