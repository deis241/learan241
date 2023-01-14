import 'dart:io';

void main() {
  print('Entrer la moyenne :');
  double moyenne = double.parse(stdin.readLineSync()!);

  if (moyenne >= 12) print('Examen Réussi');
}
