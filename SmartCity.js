const smartGarbage = function (trash, bins) {
  var garbage = bins;
  switch(trash){
  case 'recycling':
    garbage.recycling += 1;
    break;
  case 'waste':
    garbage.waste += 1;
    break;    
  case 'compost':
    garbage.compost += 1;
    break;
  }
  return garbage;
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
