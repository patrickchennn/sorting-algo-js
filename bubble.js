const {swap} = require('./utils.js');

let arr = [14,33,27,35,10];

function bubbleSort(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i-1; j++){
      if(arr[j]>arr[j+1]){
        swap(arr,j,j+1);
      }
    }
  }
  console.log(arr)
}

bubbleSort(arr)

