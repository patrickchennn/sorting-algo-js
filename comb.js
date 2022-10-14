import { swap } from './utils.js';
import chalk from 'chalk';

function getNextGap(gap){
  // Shrink gap by Shrink factor
  gap = Math.floor(gap*10/13);
  if (gap < 1) return 1;
  return gap;
}


function sort(arr){
  let n = arr.length;
  let gap = n;
  let swapped = true;
  console.log(chalk.blue(`[info] n: ${n}`));

  while (gap != 1 || swapped == true){
    gap = getNextGap(gap);
    console.log(chalk.blue(`[info] shrink gap: ${gap}`));
    swapped = false;
    for (let i=0; i<n-gap; i++){
      printArr(arr,arr[i],arr[i+gap]);
      if (arr[i] > arr[i+gap]){
        console.log(chalk.green(` since ${arr[i]}>${arr[i+gap]} ==> swap(${arr[i]}, ${arr[i+gap]})`));
        swap(arr,i,i+gap);
        swapped = true;
      }else{
        console.log(chalk.red(` since ${arr[i]}<${arr[i+gap]} ==> no swap`));
      }
    }
    console.log("\n");
  }
}

let arr = [8, 4, 1, 56, 3, -44, 23, -6, 28, 0]; // len=10
printArr(arr);
sort(arr);

function printArr(arr,a,b){
	process.stdout.write("[ ");
	for(let val of arr){
    if(val===a) {
  		process.stdout.write(chalk.yellow(`${val} `));
    }else if(val===b){
  		process.stdout.write(chalk.yellow(`${val} `));
    }else{
      process.stdout.write(`${val} `);
    }
	}
  process.stdout.write("]");
}

/* references
https://www.geeksforgeeks.org/comb-sort/
*/