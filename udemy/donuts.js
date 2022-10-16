head = [1,2,3,4,5,6,7,8,9,10,11];
var solution =  (head) => {
  let number = head.length;
  if (number%2===0){
      let displayNumber = number / 2;
      console.log(head.slice(displayNumber,number))
  }else {
    let displayNumber = (number-1)/2
    console.log(head.slice(displayNumber,number));
  }
}
solution(head);