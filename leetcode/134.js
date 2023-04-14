/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let startIndex = 0;
  let restGas = 0;
  let total = 0;

  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];
    restGas += diff;
    total += diff;
    if (restGas < 0) {
      restGas = 0;
      startIndex = i + 1;
    }
  }

  if (total < 0) {
    return -1;
  }

  return startIndex;
};

console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]));