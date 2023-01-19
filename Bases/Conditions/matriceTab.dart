void main() {
  const int M = 5;
  const int N = 5;

  List<int> tab = [M * N];

  int val, j, i;

  val = 0;

  for (i = 1; i < N; i++) {
    for (j = 1; j < M; j++) {
      tab.addAll([i, j]);
      val = val + 1;
    }
  }
  for (i = 1; i < N; i++) {
    for (j = 1; j < M; j++) {
      print(tab);
    }
  }
}
