import 'dart:io';

void main(List<String> args) {
  int nombreUtilisateur = 0;

  print('Entrez un nombre entier :');
  nombreUtilisateur = int.parse(stdin.readLineSync()!);

  dynamic sommeEntiers(dynamic nombre) {
    dynamic somme = 0;
    for (dynamic i = 0; i <= nombre; i++) {
      somme = (((i + 1) * i) / 2) as dynamic;
    }
    return somme;
  }

  print(
      'La somme des entiers de 1 à $nombreUtilisateur est : ${sommeEntiers(nombreUtilisateur)}');
}
