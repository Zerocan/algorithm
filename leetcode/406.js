/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });

  for (let i = 0; i < people.length; i++) {
    const currPeople = people[i];
    if (currPeople[1] !== i) {
      people.splice(i, 1);
      people.splice(currPeople[1], 0, currPeople);
    }
  }

  return people;
};

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
);

var reconstructQueue1 = function (people) {
  let queue = [];
  people.sort((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });

  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i])
  }

  return queue;
};
