// Funtion to add odd or even numbers
const conditionalSum = (values, condition) => {
  let evenNumber = 0;
  let oddNumber = 0;
  if (condition === "even"){
    for (let i = 0; i < values.length; i ++){
      if (values[i]%2===0){
        evenNumber += values[i];
      }
    }
    return evenNumber;
  }
  else {
    for (let i = 0; i < values.length; i ++){
      if (values[i]%2 != 0){
        oddNumber += values[i];
      }
    }
    return oddNumber;
  }
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));