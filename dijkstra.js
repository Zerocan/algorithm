function dijkstra(graph, startNode, endNode) {
  // 初始化节点距离和前置节点的对象
  const distances = {};
  const previousNodes = {};

  for (let node in graph) {
    distances[node] = Infinity;
    previousNodes[node] = null;
  }

  distances[startNode] = 0;

  const unvisitedNodes = {};
  for (let node in graph) {
    unvisitedNodes[node] = true;
  }

  // 在未访问的节点中选择最小距离的节点
  function getClosestNode() {
    let closestNode = null;
    let shortestDistance = Infinity;
    for (let node in unvisitedNodes) {
      if (distances[node] < shortestDistance) {
        closestNode = node;
        shortestDistance = distances[node];
      }
    }

    return closestNode;
  }

  let closestNode = startNode;
  while (!!closestNode) {

    for (let neighbor in graph[closestNode]) {
      let distance = graph[closestNode][neighbor];
      let totalDistance = distances[closestNode] + distance;
      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        previousNodes[neighbor] = closestNode;
      }
    }

    delete unvisitedNodes[closestNode];
    closestNode = getClosestNode();
  }

  // 构建最短路径数组
  let shortestPath = [endNode];
  let currentNode = endNode;
  while (currentNode !== startNode) {
    currentNode = previousNodes[currentNode];
    shortestPath.unshift(currentNode);
  }

  return { path: shortestPath, distance: distances[endNode] };
}

const graph = {
  A: { B: 1, C: 4 },
  B: { E: 3 },
  C: { D: 2 },
  D: { E: 1 },
  E: {}
};

const result = dijkstra(graph, 'A', 'D');
console.log(result.path); // 输出 ['A', 'C', 'D']
console.log(result.distance); // 输出 6

