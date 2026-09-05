import 'dart:io';

void main(List<String> args) {
  int nbreJour;

  print("Entre le nombre de jour: ");
  nbreJour = int.parse(stdin.readLineSync()!);

  if (nbreJour == 31) {
    print(""" Janvier, Mars, Mai, Juillet, Aout, Octobre, Decembre """);
  } else if (nbreJour == 30) {
    print("""Avril, Juin, Septembre, Novembre""");
  } else {
    print("Fevrier");
  }
}
