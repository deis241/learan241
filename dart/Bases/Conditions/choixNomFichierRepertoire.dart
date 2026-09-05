import 'dart:io';

void main() {
  final int choix;

  print("""
   Taper: 
   1- Nom  du fichier 
   2- Nom du repertoire 
   3- Nom complet  
  """);
  choix = int.parse(stdin.readLineSync()!);

  switch (choix) {
    case 1:
      print("Nom du fichier: Algo1.txt");
      break;
    case 2:
      print("Nom du repertoire: C");
      break;
    case 3:
      print("Nom complet: C:/Algo1.txt");
      break;
    default:
      print(""" Aucune valeur choisie""");
  }
}
