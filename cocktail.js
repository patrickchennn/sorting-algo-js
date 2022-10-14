import { swap } from './utils.js';

const arr = [5,1,4,2,8,0,2];

function sort(arr){
  let isSwap;
  for(let i=0; i<arr.length; i++){
    isSwap = false;
    for(let j=0; j<arr.length-i; j++){
      if(arr[j]>arr[j+1]){
        swap(arr,j,j+1);
        isSwap = true;
      }
    }
    if(isSwap===false) break;
    for(let j=arr.length-1; j>=0; j--){
      if(arr[j]>arr[j+1]){
        swap(arr,j,j+1);
      }
    }
    if(isSwap===false) break;
  }
}

sort(arr);
console.log(arr);