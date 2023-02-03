import 'dart:io';

void main(List<String> args) {
  int nombreUtilisateur = 0;

  print('Entrez un nombre entier :');
  nombreUtilisateur = int.parse(stdin.readLineSync()!);

  dynamic sommeEntiersImpair(dynamic nombre) {
    dynamic somme = 0;
    for (dynamic i = 0; i <= nombre; i++) {
      print('i = ${i + 1}');
      somme = i * i;
    }
    return somme;
  }

  print(
      'La somme des entiers de 1 à $nombreUtilisateur est : ${sommeEntiersImpair(nombreUtilisateur)}');
}
