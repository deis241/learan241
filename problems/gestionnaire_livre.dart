import 'dart:math';

void main() {
  var numLivreClassement = Random().nextInt(1000);

  Map<String, dynamic> livre = {
    "id": 0,
    "numImat": 0,
    "nom": "",
    "prenom": "",
    "titre": "",
    "titreSecondaire": "",
    "editeur": "",
    "collection": "",
    "anneeEdition": 0,
  };
  var first = livre['id'] = numLivreClassement;
  var firstA = livre['id'];

  List tabLivres = [];
  tabLivres.add(first);

  tabLivres.forEach(print);
}
