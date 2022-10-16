const numberOfVowels = data => {
  let number = 0;
  for (let letter of data){
    switch (letter){
      case 'a':
        number += 1;
        break;
      case 'e':
        number += 1;
        break;
      case 'i':
        number += 1;
        break;
      case 'o':
        number += 1;
        break;
      case 'u':
        number += 1;
        break;
    }
  }
  return number;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));