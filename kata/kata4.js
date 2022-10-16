const instructorWithLongestName = instructors => {
  longestName = instructors[0].name;
  let j;
  for (let i = 0; i < instructors.length; i++){
    let teacher = instructors[i].name;
    if (teacher.length > longestName.length){
      j  = i;
      longestName = instructors[j].name;
    }
  }
  return instructors[j];
}
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"},
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"},
]));