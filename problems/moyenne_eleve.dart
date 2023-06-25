import 'dart:io';
import 'dart:math';

void main() {
  String nom, prenom, date_naissance, date_examen;
  List dates = [];
  var id = Random().nextInt(10000);

  print("Entrer le nom ");
  nom = stdin.readLineSync()!;

  print("Entrer le prenom ");
  prenom = stdin.readLineSync()!;

  print("Entrer le date_naissance ");
  date_naissance = stdin.readLineSync()!;

  while (dates.length != 3) {
    print("Entrer la date examen ");
    date_examen = stdin.readLineSync()!;
    dates.add(date_examen);
  }

  moyenne(n1, n2, n3) {
    double? moy = 0.0;
    moy = (n1 + n2 + n3) / 3;
    return moy;
  }

  var resul = moyenne(18, 14, 19);

  var qccm = (resul! * 40) / 100;
  var tp = (resul * 60) / 100;

  void displayElement(String mention) {
    var fullName = nom + '' + prenom;

    print(
        """Bravo au candidat numero : $id \n vous avez obtenue une moyenne de : $resul avec une mention  $mention   \n toute nos félicitation a vous $fullName \n
        ne le $date_naissance.
        Voici la repartition de vos notes \n vous avez obtenu une moyenne en QCM de : $qccm % \n
        vous avez obtenu une moyenne en TP de : $tp % """);
  }

  if (resul >= 16 && resul <= 20) {
    displayElement("Tres bien");
  } else if (resul >= 14 && resul <= 16) {
    displayElement("Bien");
  } else if (resul >= 12 && resul <= 14) {
    displayElement("Assez bien");
  } else if (resul >= 10 && resul <= 12) {
    displayElement("Passable");
  } else if (resul >= 5 && resul <= 10) {
    displayElement("Insuffisante");
  } else {
    displayElement("Très Insuffisante");
  }
}
