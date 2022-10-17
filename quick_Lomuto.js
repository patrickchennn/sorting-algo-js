import chalk from 'chalk';
import { swap } from './utils.js';

// const arr = [7,2,1,6,8,5,3,4];
const arr = [10, 5, 2, 3,9,5,6,13,13,41,5,5,3,523,45,2345,234,52,4523452345]

function partition(arr,l,r){
  const pivot = arr[r]
  
  let i=l-1;
  for(let j=l; j<=r-1; j++){
    if(arr[j]<=pivot){
      i++;
      // swap the element
      swap(arr,i,j);
    }
  }
  // place the pivot value to the right place
  swap(arr,i+1,r);
  return i+1;
}

function quick(arr,l,r){
  if(l<r){
    const pIdx = partition(arr,l,r);
    quick(arr,l,pIdx-1);
    quick(arr,pIdx+1,r);
  }
}
quick(arr,0,arr.length-1);
console.log(chalk.greenBright("sorted arr: ",arr))

/* resources:
https://www.geeksforgeeks.org/quick-sort/
*/