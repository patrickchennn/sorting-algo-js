import { swap } from './utils.js';

function sort(arr){
	let n = arr.length;
  // Start with a big gap, then reduce the gap
  for (let gap=Math.floor(n/2); gap>=1; gap=Math.floor(gap/2)){
    console.log(`\ngap: ${gap}`);
    for(let right=gap; right<n; right++){
      console.log(`right: ${right}`);
      for(let left=right-gap; left>=0; left-=gap){
        console.log(`left: ${left}`);
        console.log(`${arr[left]}>${arr[left+gap]}`)
        if(arr[left]>arr[left+gap]){
          swap(arr,left,left+gap);
        }else{
          break;
        }
      }
    }
  }
}

let arr = [23,29,15,19,31,7,9,5,2];
sort(arr);
console.log(arr);

/*
https://www.youtube.com/watch?v=9crZRd8GPWM
7.11 Shell Sort algorithm | sorting algorithms | Full explanation with code | data structures
*/