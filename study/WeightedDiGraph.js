// 带权有向图

class weightedDiGraph {
  constructor() {
    this.vertices = {}; // 顶点
    this.edges = {}; // 边
  }

  addVertex(vertex) {
    this.vertices[vertex] = true;
    this.edges[vertex] = {};
  }

  addEdge(from, to, weight) {
    if (!this.vertices[from] || !this.vertices[to]) {
      return 'Vertex not found in graph';
    }
    this.edges[from][to] = weight;
  }

  // 获取从一个顶点出发的所有边
  getEdgesFromVertex(vertex) {
    const edges = [];
    for (let toVertex in this.edges[vertex]) {
      edges.push({from: vertex, to: toVertex, weight: this.edges[vertex[toVertex]]});
    }

    return edges;
  }

  // 获取图中所有边
  getAllEdges() {
    const res = [];
    for (let vertex in this.vertices) {
      res.push(this.getEdgesFromVertex(vertex));
    }

    return res;
  }

  // 获取所有顶点
  getAllVertices() {
    return Object.keys(this.vertices);
  }
}