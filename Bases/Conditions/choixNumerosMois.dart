import 'dart:io';

void main() {
  int numeroMois;

  print("Entrer un numeros de mois : ");
  numeroMois = int.parse(stdin.readLineSync()!);

  switch (numeroMois) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      print("31 jours");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      print("30 jours");
      break;
    case 2:
      print("28 jours");
      break;
    default:
      print("Aucun mois ne correspond");
  }
}
