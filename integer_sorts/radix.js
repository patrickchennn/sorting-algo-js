import chalk from "chalk";

function radixSort(arr){
  console.log(chalk.blueBright(`original array: [${arr}]`))
  let max=arr[0];
  for(let i=1; i<arr.length; i++)
    max = Math.max(max,arr[i]);
  
  let lsd=1;
  const count = Array(arr.length)
  const sortedOne = Array(arr.length)
  while(max){
    console.log(chalk.magentaBright(`\nPASS #${lsd}`))

    count.fill(0);
    for(let val of arr){
      val = Math.floor(val/lsd)%10;
      count[val]++;
    }
    console.log("count the number LSD occured: ", count);
    
    for(let i=1; i<arr.length; i++){
      count[i] += count[i-1]
    }
    console.log("update the count such that it will contains the actual position: ", count);
    
    for(let i=arr.length-1; i>=0; i--){
      const val = (Math.floor(arr[i]/lsd))%10;
      const idx = --(count[val])

      // console.log(`
      //   idx: ${idx}; i: ${i}
      //   arr[idx]=${arr[idx]}, arr[i]=${arr[i]}
      // `)

      sortedOne[idx] = arr[i]
    }
    for(let i=0; i<sortedOne.length; i++){
      arr[i] = sortedOne[i];
    }
    console.log(chalk.yellowBright("result: ", arr))
    sortedOne.fill(0)
    lsd*=10
    max = Math.floor(max/10)
  }
}

const arr = [432,8,530,90,88,231,11,45,677,199]; // n=10
radixSort(arr);
console.log(chalk.greenBright("sorted arr: "+arr))

// modulo 10 to get the last digit 
// 123%10 --> 3
// 9995%10 --> 5