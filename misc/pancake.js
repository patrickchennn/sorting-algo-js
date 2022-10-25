import chalk from "chalk";
import { swap } from "../utils.js";

function flip(arr,right){
  let left = 0;
  while (left < right){
    printArray(arr,arr[left],arr[right]);
    swap(arr,left,right)
    left++;
    right--;
  }
}

function findMaxIdx(arr,n){
  let index=0;
  for (let i=0; i<n; ++i)
    if (arr[i] > arr[index])
      index = i;
               
  return index;
}

// The main function that
// sorts given array using
// flip operations
function pancakeSort(arr, n){
  console.log(chalk.magenta(`original array: [${arr}]`))

  // Start from the complete array and one by one reduce current size by one
  // n=4 ==> 4 3 2 1
  for(let size=n-1; size>=0; size--){
    console.log(chalk.blueBright(`\nITERATION #${n}`));
    
    let mi = findMaxIdx(arr,size);

    console.log(chalk.yellowBright(`max: ${mi}`))
    console.log("FIRST FLIP")
    flip(arr, mi);
    console.log(chalk.greenBright(`RESULT OF 1st FLIP: `))
    printInterval(arr,0,mi);
    console.log("");

    
    console.log("SECOND FLIP")
    flip(arr, size);
    console.log(chalk.greenBright(`RESULT OF 2nd FLIP: `))
    printInterval(arr,0,size);
    console.log("");
  }
}


const arr = [3, 5, 2, 1, 7, 6, 4];
const n = arr.length;

pancakeSort(arr, n);
console.log(chalk.greenBright(`sorted array: [${arr}]`))

function printArray(arr,a,b){
  process.stdout.write(`[ `);

  for (let i=0; i < arr.length; i++){
    if(arr[i]===a){
      process.stdout.write(chalk.yellowBright(`${arr[i]} `))
    }else if(arr[i]===b){
      process.stdout.write(chalk.magentaBright(`${arr[i]} `))
    }else{
      process.stdout.write(`${arr[i]} `)
    }
  }
  console.log(']');
}

function printInterval(arr,a,b){
  process.stdout.write(`[ `);
  for(let i=a; i<=b; i++){
    process.stdout.write(chalk.cyanBright(`${arr[i]} `))
  }

  for(let i=b+1; i<arr.length; i++){
    process.stdout.write(`${arr[i]} `);
  }
  console.log(']');
}

