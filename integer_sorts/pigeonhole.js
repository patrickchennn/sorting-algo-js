import chalk from "chalk";

function pigeonhole_sort(arr, n){
	let min = arr[0];
	let max = arr[0];
	let range, index;
	
	for(let val of arr){
		if(val > max) max = val;
		if(val < min) min = val;
	}
	
	range = max - min + 1;
  console.log(chalk.blueBright(`
    original array: ${arr}
    range: ${range},
    max: ${max},
    min: ${min},
  `))

  // fill the pigeon hole array with all 0 
	let phole = Array(arr.length).fill(0);
	
	for(let i = 0; i < n; i++){
		phole[arr[i] - min]++;
    console.log(chalk.blueBright(`arr[i]-min ==> ${arr[i]}-${min}=${arr[i] - min}`))
    console.log(chalk.blueBright(`pigeon hole: [${phole}]\n`))
  }
	
		
	index = 0;
	
	for(let j = 0; j < range; j++)
		while(phole[j]-- > 0){
      console.log(`j+min ==> ${j}+${min}=${j+min}`);
			arr[index++] = j + min;
    }
	
}

const arr = [8, 3, 2, 7,4, 6, 8];
pigeonhole_sort(arr,arr.length);

console.log(chalk.greenBright("sorted arr: "+arr))

/*
https://www.geeksforgeeks.org/pigeonhole-sort/
*/