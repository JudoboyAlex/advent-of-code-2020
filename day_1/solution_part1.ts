var fs = require('fs');
var textByLine = fs.readFileSync('data.txt').toString().split("\n");

//Part 1
const getTwoSum = (file: string[]): number => {
  let arr = [];
  for(let i = 0; i < file.length-1; i++){
    for(let j = i+1; j < file.length; j++){
      if(Number(file[i]) + Number(file[j]) === 2020){
        arr.push(Number(file[i]), Number(file[j]))
      }
    }
  }

  return arr[0] * arr[1];
}

console.log(getTwoSum(textByLine));

module.exports = getTwoSum;

