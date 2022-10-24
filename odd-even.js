import chalk from "chalk";
import { swap } from "./utils.js";

function oddEvenSort(arr, n){

  let isSorted = false;
  
  while (!isSorted){
    isSorted = true;

    // Perform Bubble sort on odd indexed element
    console.log(chalk.blue(`\nodd sort`))
    for (let i=1; i<=n-2; i+=2){
      print(arr,arr[i],arr[i+1],"yellow")
      process.stdout.write(" ==> ");
      if (arr[i] > arr[i+1]){
        swap(arr,i,i+1)
        print(arr,arr[i],arr[i+1],"green")
        console.log('')
        isSorted = false;
      }else{
        console.log(chalk.red('no swap'))
      }
    }

    console.log(chalk.blue(`\neven sort`))
    // Perform Bubble sort on even indexed element
    for (let i=0; i<=n-2; i=i+2){
      print(arr,arr[i],arr[i+1],"yellow")
      process.stdout.write(" ==> ");
      if (arr[i] > arr[i+1]){
        swap(arr,i,i+1)
        print(arr,arr[i],arr[i+1],"green")
        console.log('')
        isSorted = false;
      }else{
        console.log(chalk.red('no swap'))
      }
    }
  }

  return;
}


const arr = [3,2,33,8,5,6,4,1];

oddEvenSort(arr, arr.length);

function print(arr,a,b,col){
  process.stdout.write(`[ `);
  for(let val of arr){
    if(val===a || val===b){
      if(col==="green")
        process.stdout.write(chalk.greenBright(`${val} `));
      else if(col==="yellow")
        process.stdout.write(chalk.yellow(`${val} `));
    }else{
      process.stdout.write(`${val} `);
    }
  }
  process.stdout.write(`]`);
}


/*
geeksforgeeks.org/odd-even-sort-brick-sort/
*/