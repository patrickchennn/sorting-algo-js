const {swap} = require('./utils.js');


let arr = [14,33,27,35,10];

function bubbleSort(arr){
  let isSwap;
  for(let i=0; i<arr.length; i++){
    isSwap = false;
    for(let j=0; j<arr.length-1-i; j++){
      if(arr[j]>arr[j+1]){
        swap(arr,j,j+1);
        isSwap = false;
      }
    }
    if(isSwap===false) break;
  }
  console.log(arr)
}

bubbleSort(arr)

