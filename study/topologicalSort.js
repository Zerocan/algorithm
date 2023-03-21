// 拓扑排序

/**
 * Kahn 算法（贪心算法）
 *
 * 首先遍历图中的每个节点，计算出每个节点的入度，并将入度为 0 的节点加入队列。
 * 然后从队列中取出入度为 0 的节点，并将其加入排序结果中，同时将与该节点相邻的节点的入度减 1。
 * 如果相邻节点的入度变为 0，则将其加入队列中。重复此过程，直到队列为空。
 * 如果排序结果中的节点个数与图中节点个数不相等，则说明图中存在环，排序失败，返回 null。
 * 否则，返回排序结果。
 */

function topoSortByKahn(graph) {
  const inDegree = new Array(graph.length).fill(0);
  const queue = []; // 存放入度为0的节点
  const result = []; // 存放排序后的结果

  // 初始化每个节点的入度
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      const neighbor = graph[i][j];
      inDegree[neighbor]++;
    }
  }

  // 将入度为0的节点入队
  inDegree.forEach((item, index) => {
    if (item === 0) {
      queue.push(index);
    }
  });

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    for (let i = 0; i < graph[node].length; i++) {
      const neighbor = graph[node][i];
      inDegree[neighbor]--;

      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  if (result.length !== graph.length) {
    return null;
  }

  return result;
}

const graph = [
  [1, 2], // 节点 0 的邻居节点为 1 和 2
  [3], // 节点 1 的邻居节点为 3
  [3, 4], // 节点 2 的邻居节点为 3 和 4
  [5], // 节点 3 的邻居节点为 5
  [5], // 节点 4 的邻居节点为 5
  [], // 节点 5 没有邻居节点
];

console.log(topoSortByKahn(graph));


// DFS 深度优先遍历
function topoSortDFS(graph) {
  const visited = {};
  const result = []; // 用来记录排序结果的数组

  function dfs(node) {
    visited[node] = true;
    result.push(node);
    for (let i = 0; i < graph[node].length; i++) {
      const neighbor = graph[node][i];
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  // 对每个节点执行 DFS 算法
  for (const node in graph) {
    if (!visited[node]) {
      dfs(node);
    }
  }

  return result.reverse();
}

const dfsGraph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["E"],
  D: [],
  E: [],
};

console.log("topoSortDFS", topoSortDFS(dfsGraph));
