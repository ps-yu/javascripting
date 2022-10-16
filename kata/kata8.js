const repeatNumbers = function(data){
  let requiredArray = [];
  for (let i = 0; i < data.length; i++){
    requiredArray.push(((data[i][0]).toString()).repeat(data[i][1]));
  }
  return requiredArray.join(',');
}
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));