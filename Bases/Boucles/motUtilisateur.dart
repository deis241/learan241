import 'dart:io';

void main() {
  const String defautlValue = "fin";
  String value = "";
  List<String> tabValue = [];

  do {
    print("Ajouter un mot au panier: ");
    value = stdin.readLineSync()!;
    if (value != defautlValue) {
      tabValue.add(value);
    }
  } while (defautlValue != value);

  print("voici votre dernier mot : $tabValue");

  print("Aurevoir vous saisi $defautlValue");
}
