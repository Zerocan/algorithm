/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// TODO return true false的逻辑还不是很清晰
var findItinerary = function (tickets) {
  const res = ['JFK'];
  let map = {};
  for (const ticket of tickets) {
    const [from, to] = ticket;
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }

  // 对到达城市列表排序
  for (const city in map) {
    map[city].sort();
  }

  // city 当前访问的城市 used当前用掉的机票
  const dfs = (city, used) => {
    if (used === tickets.length) {
      return true;
    }
    const nextCities = map[city]; // 获取下一站能去的城市list
    if (!nextCities || nextCities.length == 0) { // 没有邻接城市了
      return false; // 还没用光机票，就没有下一站了，返回false，进行回溯
    }
    for (let i = 0; i < nextCities.length; i++) {
      const next = nextCities[i]; // 当前选择的下一站
      nextCities.splice(i, 1);
      res.push(next);
      if (dfs(next, used + 1)) {
        return true;
      } else {
        nextCities.splice(i, 0, next); // 将删掉的这一站重新插回去
        res.pop();
      }
    }
  };

  dfs('JFK', 0);
  return res;
};
