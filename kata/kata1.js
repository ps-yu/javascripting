/*
//Funtion that returns the sum of two largest numbers in an array
const sumLargestNumbers = data => {
//To find the largest number in the array
  let largestNumber = data[0];
  for ( let i = 0; i < data.length; i ++){
    if (data[i] > largestNumber){
      largestNumber = data[i];
    }
  }
//Deleting the largest number from the arary 
  for (i = 0; i < data.length; i++){
    if (data[i]===largestNumber){
      data.splice(i,1);
    }
  }
//Finding the second larget number from the array
  let secondLargestNumber = data[0];
  for ( let i = 0; i < data.length; i ++){
    if (data[i] > secondLargestNumber){
      secondLargestNumber = data[i];
    }
  }
//Returning the sum of the two largest numbers
  return largestNumber + secondLargestNumber;
}
*/
//Easier method
const sumLargestNumbers = data => {
  data = data.reverse();
  return data;
}
  
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
// Sort function didn't work