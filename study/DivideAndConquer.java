// 求一组数据的逆序对个数 归并排序
public class DivideAndConquer {
  private int num = 0;

  public int count(int[] a, int n) {
    num = 0;
    mergeSortCounting(a, 0, n - 1);
    return num;
  }

  private void mergeSortCounting(int a[], int p, int r) {
    if (p >= r) return;
    int q = (p+r) / 2;
    mergeSortCounting(a, p, q);
    mergeSortCounting(a, q + 1, r);
    merge(a, p, q, r);
  }

  private void merge(int a[], int p, int q, int r) {
    int i = p, j = q + 1, k = 0;
    int[] tmp = new int[r - p + 1];
    while (i <= q && j <=r) {
      if (a[i] <= a[j]) {
        tmp[k++] = a[i++];
      } else {
        num += q - i + 1;
        tmp[k++] = a[j++];
      }
    }

    while (i <= q) {
      tmp[k++] = a[i++];
    }

    while (j <= r) {
      tmp[k++] = a[j++];
    }

    for (i = 0; i <= r - p; ++i) { // 拷贝回a
      a[p + 1] = tmp[i];
    }
  }

  public static void main(String[] args) {
    DivideAndConquer divide = new DivideAndConquer();
    int[] nums = new int[]{5, 0, 4, 2, 3, 1, 3, 3, 3, 6, 8, 7};
    System.out.print(divide.count(nums, 12));
  }
}