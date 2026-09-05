import 'dart:io';

void main(List<String> args) {
  int nombre, exposant;
  late int resultat;

  print("Entre le nombre : ");
  nombre = int.parse(stdin.readLineSync()!);
  print("Entrer l'exposant ");
  exposant = int.parse(stdin.readLineSync()!);

  for (int i = 0; i <= nombre; i++) {
    resultat = nombre * exposant;
  }
  print("la puissance de $nombre est:  $resultat");
}
