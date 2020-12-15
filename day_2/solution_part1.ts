var fs = require('fs');
var textByLine = fs.readFileSync('data.txt').toString().split("\n");

// Part 1
const validPassword = (data: string[]):number => {
  let count = 0;
  for(let i = 0; i < data.length; i++ ){
    let min = Number(data[i].split(" ")[0].split("-")[0]);
    let max = Number(data[i].split(" ")[0].split("-")[1]);
    let letter = data[i].split(" ")[1].split(":")[0];
    let letters = data[i].split(" ")[2].split("");

    let letterCount = 0;
    for(let j of letters){
      if( j === letter){
        letterCount++;
      }
    }

    if(letterCount >= min && letterCount <= max){
      count++;
    }
  }

  return count;

}

console.log(validPassword(textByLine));

