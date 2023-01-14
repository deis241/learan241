import 'dart:io';

void main() {
  const double tvaLuxe = 0.196;
  const double tvaAutre = 0.055;
  double prixTtc = 0;
  double prixHt = 0;
  final int categorie;

  print("Entrer le prix ht du produit: ");
  prixHt = double.parse(stdin.readLineSync()!);
  print("""
    Entrer la categorie du produit : 
    1- pour luxe 
    2- pour autre 
 """);
  categorie = int.parse(stdin.readLineSync()!);

  if (categorie == 1)
    prixTtc = prixHt * (tvaLuxe + 1);
  else if (categorie == 2)
    prixTtc = prixHt * (tvaAutre + 1);
  else
    print("Aucune categorie choisie!");

  print("Votre produit coute : $prixTtc");
}
