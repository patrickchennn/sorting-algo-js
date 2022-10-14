import chalk from 'chalk';
import { swap } from './utils.js';


let arr = [14,33,27,3,13,45234];
let n = arr.length;

function bubbleSort(arr){
  console.log(chalk.blue(`[info] n=${n}`));

  for(let i=0; i<n; i++){
    console.log(chalk.blue(`[info] ITERATION #${i+1}`));
    for(let j=0; j<n-i-1; j++){
      printArr(arr,j,n-i-1,arr[j],arr[j+1]);
      if(arr[j]>arr[j+1]){
        console.log(chalk.green(` since ${arr[j]}>${arr[j+1]} ==> swap(${arr[j]},${arr[j+1]})`));
        swap(arr,j,j+1);
      }else{
        console.log(chalk.red(` since ${arr[j]}<${arr[j+1]} ==> no swap needed`));
      }
    }
    console.log('\n');
  }
}

bubbleSort(arr)
console.log(chalk.greenBright("sorted arr: "+arr))


 function printArr(arr,left,right,a,b){
	process.stdout.write("[ ");
	for(let i=0; i<=right; i++){
    const val = arr[i];
    if(val===a || val===a) {
  		process.stdout.write(chalk.yellow(`${val} `));
    }else{
      process.stdout.write(`${val} `);
    }
	}
  for(let i=right+1; i<n; i++){
    process.stdout.write(chalk.green(`${arr[i]} `));
  }
  process.stdout.write("]");
}

/* references
https://www.geeksforgeeks.org/bubble-sort/
*/