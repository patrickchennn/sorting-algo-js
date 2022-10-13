const {swap} = require('./utils.js');
const arr = [2,7,4,1,5,3];



for(let i=0; i<arr.length-1; i++){
  console.log(`ITERATION #${i}`);
  let minIdx = i;
  for(let j=i+1; j<arr.length; j++){
    if(arr[j] < arr[minIdx]){
      minIdx = j;
    }
  }
  console.log(`min=${arr[minIdx]} idx=${minIdx}`);
  console.log(`swap(${arr[i]}(idx: ${i}), ${arr[minIdx]}(idx: ${minIdx}))`)
  console.log(arr,'\n');

  swap(arr,i,minIdx);
}
console.log(arr);
