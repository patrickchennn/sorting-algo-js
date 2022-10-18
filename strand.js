import chalk from "chalk";

let arr = [10,5,30,40,2,4,9];

function strand(arr,output){
  if(!arr.length) return;
  let sublist = []
  sublist.push(arr.shift());
  console.log(chalk.blueBright(`arr: ${arr}`))
  console.log(chalk.blueBright(`currVal: ${sublist[0]}`))

  for(let i=0; i<arr.length; i++){
    print(arr,arr[i],sublist[0],"yellow")
    if(arr[i]>sublist[0]){
      process.stdout.write(" ==> ");
      print(arr,arr[i],sublist[0],"green")
      sublist.push(arr[i]);
      arr.splice(i,1)
      i--;
    }
    console.log('')
  }
  ;
  output.unshift(...sublist)
  console.log(chalk.blueBright(`output: ${output}\n`))

  strand(arr,output);
}

const output = []
strand(arr,output);
console.log(chalk.greenBright("sorted arr: "+output))


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