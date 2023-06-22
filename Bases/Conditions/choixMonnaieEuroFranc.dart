import 'dart:io';

void main() {
  const int franc = 655;

  int choixDevise;
  double prixEntrer, prixSortie;

  print("Entre le prix ");
  prixEntrer = double.parse(stdin.readLineSync()!);

  print("""
    choisir la devise : 
    1- Franc 
    2- Euro
    
""");
  choixDevise = int.parse(stdin.readLineSync()!);

  switch (choixDevise) {
    case 1:
      prixSortie = prixEntrer * franc;
      print("Votre article coute $prixSortie en franc");
      break;
    case 2:
      prixSortie = prixEntrer / franc;
      print("Votre article coute $prixSortie en euro");
      break;
    default:
      print("Vous n'avez rien choisi a plus !");
  }
}
