import 'dart:io';

void main() {
  String toucheSaisie;
  const String sortie = 'q';

  print("Pressez une touche : ");
  toucheSaisie = stdin.readLineSync()!;

  while (toucheSaisie != sortie) {
    print("votre valeur est: $toucheSaisie");

    print("Pressez une touche : ");
    toucheSaisie = stdin.readLineSync()!;
  }
  print("Aurevoir man!");

  //seconde methode

  // while (true) {
  //   if (toucheSaisie == sortie) break;
  //   print("Vous avez pressez : $toucheSaisie");
  // }
  // print("See you gys");
}
