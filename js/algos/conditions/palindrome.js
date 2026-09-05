module.exports = {
  name: 'Palindrome',
  async run(ask) {
    const str = await ask('Enter a string: ');
    const len = str.length;
    let flag = 0;

    for (let i = 0; i < len; i++) {
      console.log(`i: ${i}, len: ${len}, str[i]: ${str[i]}, str[len - i - 1]: ${str[len - i - 1]}`);
      if (str[i] !== str[len - i - 1]) {
        flag = 1;
        break;
      }
    }

    if (flag === 1) {
      console.log('Not a palindrome');
    } else {
      console.log(`Palindrome et la taille de la chaine est: ${len}`);
    }
  },
};
