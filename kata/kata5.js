const urlEncode = function(text) {
  let myArray = text.split(" ");
  let string;
  let counter = myArray.length;
  if (myArray[0] === "" && myArray[counter-1] === ""){
     myArray.pop();
     myArray.shift();
     string = myArray.join("%20");
  }else if (myArray[0] === " "){
    myArray.shift();
    string = myArray.join("%20");
  }else if (myArray[counter-1 === " "]){
    myArray.pop()
    string = myArray.join("%20");
  }else {
    string = myArray.join("%20");
  }
  return string;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));