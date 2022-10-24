import { swap } from "./utils.js";
import chalk from "chalk";

/*
arr[index] = blue
arr[index-1] = purple
*/
function gnomeSort(arr, n){
  console.log(chalk.yellowBright(`original array: [${arr}]`))
  let index = 0;

  while (index < n) {
    if (index == 0) index++;
    print(arr,arr[index],arr[index-1],"yellow")
    process.stdout.write(" ==> ");
    if (arr[index-1] >= arr[index]){
      print(arr,arr[index],arr[index-1],"green")
      console.log("")
      swap(arr,index,index-1)
      index--;
    }else {
      console.log(chalk.red('no swap'))
      index++;
    }
  }
  return;
}

const arr = [34, 2, 10, -9 ];
gnomeSort(arr, arr.length);

function print(arr,a,b,col){
  process.stdout.write(`[ `);
  for(let val of arr){
    if(val===a){
      if(col==="green")
        process.stdout.write(chalk.greenBright(`${val} `));
      else
        process.stdout.write(chalk.blue(`${val} `));
    }else if(val===b){
      if(col==="green")
        process.stdout.write(chalk.greenBright(`${val} `));
      else
        process.stdout.write(chalk.magenta(`${val} `));
    }
    else{
      process.stdout.write(`${val} `);
    }
  }
  process.stdout.write(`]`);
}