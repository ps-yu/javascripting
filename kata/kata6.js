const whereCanIPark = function (spots, vehicle){
  for (let y = 0; y < spots.length; y++){
    for (let x = 0; x < spots[y].length; x++){
      if (vehicle === "small"){
        if (spots[y][x] === 'R' || spots[y][x] === 'S'){
          return [x,y];
        }
      }else if (vehicle === 'regular'){
        if (spots[y][x] === 'R'){
          return  [x, y];
        }
      }else if ( vehicle === 'motorcycle'){
        if (spots[y][x] === 'R' || spots[y][x] === 'S' || spots[y][x] === 'M'){
          return [x, y];
        }
      }
    }
  }
  return false;
}