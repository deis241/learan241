import 'dart:io';

void main(List<String> args) {
  dynamic numerateur, denominateur;

  print("Entrez le numerateur : ");
  numerateur = int.parse(stdin.readLineSync()!);
  print("Entrez le denominateur : ");
  denominateur = int.parse(stdin.readLineSync()!);

  while (denominateur != 0) {
    print("Le resultat est : ${numerateur / denominateur}");

    print("Entrez le numerateur : ");
    numerateur = int.parse(stdin.readLineSync()!);
    print("Entrez le denominateur : ");
    denominateur = int.parse(stdin.readLineSync()!);
  }
  print("La divsion par zéro est impossible");
}
