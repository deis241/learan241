import 'dart:io';

void main() {
  int nbre1, nbre2, choixUtilisateur, resultat;

  print("Entrer le premier nombre ");
  nbre1 = int.parse(stdin.readLineSync()!);

  print("Entrer le second nombre ");
  nbre2 = int.parse(stdin.readLineSync()!);

  print("""
      Veuillez choisir un caractère : 

      1: pour la somme 
      2: pour le produit
""");
  choixUtilisateur = int.parse(stdin.readLineSync()!);

  switch (choixUtilisateur) {
    case 1:
      resultat = nbre1 + nbre2;
      print("Le resultat de la somme  est : $resultat");
      break;
    case 2:
      resultat = nbre1 * nbre2;
      print("Le resultat du produit est : $resultat");
      break;
    default:
      print("Vous n'avez rien choisi de correct");
  }
}
