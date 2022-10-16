const camelCase = function(input){
  let myArray = input.split(" ");
  let resultArray = [myArray[0]];
  for (let i = 1; i<myArray.length; i++){
    let subArray = myArray[i].split("");
    let letter = subArray[0].toUpperCase();
    subArray.shift();
    subArray.unshift(letter);
    resultArray.push((subArray.join("")));
  }
  let finalLetter = resultArray.join("");
  return finalLetter;
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));