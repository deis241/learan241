void main() {
  const int M = 5;
  const int N = 5;

  List<List<int>> tab = [];

  for (int i = 0; i < N; i++) {
    tab.add([]);
    for (int j = 0; j < M; j++) {
      tab[i].add(0);
    }
  }

  // print("element $tab : taille ${tab.length}");
  tab.forEach(print);
}
