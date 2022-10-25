import { swap } from "./utils.js";
import chalk from "chalk";

  function exchangeSort(arr){
    for(let i=0; i<arr.length; i++){
      console.log(chalk.magentaBright(`\nITERATION #${i}`))
      for(let j=i+1; j<arr.length; j++){
        print(arr,arr[i],arr[j]);
        process.stdout.write(" ==> ");
        if(arr[i]>arr[j]){
          print(arr,arr[i],arr[j],"green");
          console.log("")
          swap(arr,i,j);
        }else{
          console.log(chalk.red('no swap'))
        }
      }
      console.log(chalk.magentaBright(`AFTER [${arr}]`))
    }
  }

const arr = [84,69,76,86,94,91];
exchangeSort(arr);
console.log(chalk.greenBright("sorted arr: "+arr))

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