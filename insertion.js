import chalk from "chalk";

const arr = [7,2,4,1,5,3];

function insertionSort(arr){
  console.log(chalk.blue(`intial array: ${arr}`));
  for(let right=1; right<arr.length; right++){
    console.log(`ITERATION #${right}:`);
    let currVal = arr[right];
    let left=right-1;
    console.log(`curr value: ${currVal}`)
    // shifting part
    while(left>=0 && arr[left]>currVal){
      printInsertion(arr,arr[left],currVal,"yellow");
      process.stdout.write(" ==> ");
      let temp = arr[left+1];
      arr[left+1] = arr[left];
      arr[left] = temp;
      printInsertion(arr,arr[left+1],temp,"green");
      console.log('');
      left--;
    }
    console.log('');

    arr[left+1] = currVal;
  }
}
insertionSort(arr);
console.log(chalk.greenBright("sorted arr: "+arr))

function printInsertion(arr,a,b,col){
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