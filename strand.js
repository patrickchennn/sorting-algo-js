import chalk from "chalk";

let arr = [5, 1, 4, 2, 0, 9, 6, 3, 8, 7];
let firstTime=true;

function strand(arr,output){
  if(!arr.length) return;
  const sublist = []
  console.log(chalk.blueBright(`original arr: ${arr}`))
  sublist.push(arr.shift());
  // console.log(chalk.blueBright(`currVal: ${sublist[0]}`))

  for(let i=0,j=0; i<arr.length; i++){
    print(arr,arr[i],sublist[j],"yellow")
    process.stdout.write(` ${arr[i]}>${sublist[j]} ?`);

    if(arr[i]>sublist[j]){
      process.stdout.write(" ==> ");
      print(arr,arr[i],sublist[j],"green")
      sublist.push(arr[i]);
      arr.splice(i,1)
      i--;
      j++;
    }
    console.log('')
  }

  console.log(chalk.blueBright(`sublist: ${sublist}`))

  if(firstTime){
    output.unshift(...sublist)
    firstTime=false;
  }else{
    let subListEnd = sublist.length-1;
    let outputStart = 0;
    while(sublist.length>0){
      if(sublist[subListEnd]>output[outputStart]){
        outputStart++;
      }else{
        output.splice(outputStart,0,sublist[subListEnd])
        sublist.splice(subListEnd,1);
        subListEnd--;
        outputStart=0;
      }
    }
  }
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

/*
https://en.wikipedia.org/wiki/Strand_sort
*/