import 'dart:io';

void main() {
  print('Enter a string: ');
  String str = stdin.readLineSync()!;
  int len = str.length;
  int flag = 0;
  for (int i = 0; i < len; i++) {
    print(
        "i: $i, len: $len, str[i]: ${str[i]}, str[len - i - 1]: ${str[len - i - 1]}");
    if (str[i] != str[len - i - 1]) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) {
    print('Not a palindrome');
  } else {
    print('Palindrome et la taille de la chaine est: $len');
  }
}
