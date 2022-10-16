const checkAir = function (samples, threshold){
  let numberOfDirty = 0;
  for (let i = 0; i < samples.length; i++){
    if (samples[i]==='dirty'){
      numberOfDirty += 1;
    }
  }if (numberOfDirty / samples.length < threshold){
    return 'Clean';
  }else {
    return 'Polluted';
  }
}
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.8
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))