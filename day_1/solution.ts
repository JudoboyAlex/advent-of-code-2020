
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
  console.log(arr)
  return arr[0] * arr[1];
}

console.log(getTwoSum(textByLine));

//Part 2
const getThreeSum = (file: string[]): number => {
  let set: any = new Set();
  let arr: number[] = [];
  for(let i = 0; i < file.length - 2; i++){
    for(let j = i + 1; j < file.length - 1; j++){
      for(let k = i + 2; k < file.length; k++){
        if(Number(file[i]) + Number(file[j]) + Number(file[k]) === 2020){
          set.add(Number(file[i]));
          set.add(Number(file[j]));
          set.add(Number(file[k]));
        }
      }
    }
  }
  console.log(set);
  arr = [...set];
  return arr[0] * arr[1] * arr[2];
}

console.log(getThreeSum(textByLine));