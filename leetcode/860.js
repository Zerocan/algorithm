/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let fiveCount = 0;
  let tenCount = 0;
  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    if (bill === 5) {
      fiveCount++;
    } else if (bill === 10) {
      if (fiveCount === 0) {
        return false;
      }
      fiveCount--;
      tenCount++;
    } else {
      if (fiveCount === 0 || fiveCount * 5 + tenCount * 10 < 15) {
        return false;
      }
      if (tenCount === 0) {
        fiveCount -= 3;
      } else {
        fiveCount--;
        tenCount--;
      }
    }
  }

  return true;
};

console.group(lemonadeChange([5,5,10,10,20]))