import java.util.LinkedList;
import java.util.Queue;

// 无向图
public class Graph {
  private int v; //顶点的个数
  private LinkedList < Integer > adj[]; // 邻接表

  public Graph(int v) {
    this.v = v;
    adj = new LinkedList[v];
    for (int i = 0; i < v; i++) {
      adj[i] = new LinkedList < > ();
    }
  }

  /**
   * 添加边
   *
   * @param s 顶点
   * @param t 顶点
   */
  public void addEdge(int s, int t) {
    adj[s].add(t);
    adj[t].add(s);
  }

  /**
   * 广度优先搜索（搜索从s到t的路径，实际上也是最短路径）
   * 分解图参考：https://www.yuque.com/shisanyao/pa6068/atawxg#waZec
   * @param s 起始顶点
   * @param t 终止顶点
   */
  public void bfs(int s, int t) {
    if (s == t) return;
    // visited是用来记录已经被访问的顶点，用来避免顶点被重复访问。
    boolean[] visited = new boolean[v];
    visited[s] = true;
    // queue是一个队列，用来存储已经被访问、但相连的顶点还没有被访问的顶点。
    Queue<Integer> queue = new LinkedList<>();
    queue.add(s);
    // prev用来记录搜索路径
    int[] prev = new int[v];
    for(int i = 0; i < v; i++) {
      prev[i] = -1;
    }
    while(queue.size() != 0) {
      int w = queue.poll();
      for (int i = 0; i < adj[w].size(); i++) {
        int q = adj[w].get(i);
        if (!visited[q]) {
          prev[q] = w;
          if (q == t) {
            print(prev, s, t);
            return;
          }
          visited[q] = true;
          queue.add(q);
        }
      }
    }
  }

  // 递归打印s->t的路径
  private void print(int[] prev, int s, int t) {
    if (prev[t] != -1 && t != s) {
      print(prev, s, prev[t]);
    }
    System.out.print(t + " ");
  }

  boolean found = false; // 全局变量或类成员变量

  /**
   * 深度优先搜索
   * 
   * @param s 起始顶点
   * @param t 终止顶点
   */
  public void dfs(int s, int t) {
    found = false;
    boolean[] visited = new boolean[v];
    int[] prev = new int[v];
    for (int i = 0; i < v; i++) {
      prev[i] = -1;
    }
    runDfs(s, t, visited, prev);
    print(prev, s, t);
  }

  private void runDfs(int w, int t, boolean[] visited, int[] prev) {
    if (found == true) return;
    visited[w] = true;
    if (w == t) {
      found = true;
      return;
    }
    for (int i = 0; i < adj[w].size(); i++) {
      int q = adj[w].get(i);
      if (!visited[q]) {
        prev[q] = w;
        runDfs(q, t, visited, prev);
      }
    }
  }

  public static void main(String[] args) {
    Graph graph = new Graph(8);
    graph.addEdge(0,1);
    graph.addEdge(0,3);
    graph.addEdge(1,2);
    graph.addEdge(1,4);
    graph.addEdge(2,5);
    graph.addEdge(4,5);
    graph.addEdge(4,6);
    graph.addEdge(5,7);
    graph.addEdge(6,7);
    // 广度优先
    // graph.bfs(0,7);
    // 深度优先
    graph.dfs(0, 6);
  }
}