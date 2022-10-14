import chalk from 'chalk';
import { swap } from './utils.js';


let arr = [14,33,27,3,13,45234];
let n = arr.length;

function bubbleSort(arr){
  console.log(chalk.blue(`[info] n=${n}`));
  let isSwap;
  for(let i=0; i<n; i++){
    isSwap=false;
    console.log(chalk.blue(`[info] ITERATION #${i}`));
    for(let j=0; j<n-i-1; j++){
      printArr(arr,j,n-i-1,arr[j],arr[j+1]);
      if(arr[j]>arr[j+1]){
        console.log(chalk.green(` since ${arr[j]}>${arr[j+1]} ==> swap(${arr[j]},${arr[j+1]})`));
        swap(arr,j,j+1);
        isSwap=true;
      }else{
        console.log(chalk.red(` since ${arr[j]}<${arr[j+1]} ==> no swap needed`));
      }
    }
    // if there is no swap since above loop executed, we know the array is already sorted.
    if(!isSwap){
      console.log(chalk.blue(`[info] break. we save ${n-i-1} iteration that are not necessary to be executed`))
      break;
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