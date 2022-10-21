import chalk from "chalk";

// Function to merge piles in a sorted order
function merge_piles(piles,arr) {
	// Store minimum element from
	// the top of stack
	let ans = [];

  let min = Number.MAX_SAFE_INTEGER;
  let posToBeDeleted;
  // for every piles, Calculate the smallest element on the top
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<piles.length; j++){
      const pile = piles[j]
      // uncomment this to see the undefined value
      // if(!pile.length) {
      //   continue;
      // }
      const lastVal = pile[pile.length-1]
      if(lastVal<min){
        min = lastVal;
        posToBeDeleted = j;
      }
      console.log(`min val of pile[${pile}] is ${chalk.greenBright(lastVal)}`);
    }
    ans.push(min);
    console.log(`pick the smallest in which the answer will be ${chalk.underline.greenBright(min)}`)
    console.log("ans: ",ans,'\n');
  
    piles[posToBeDeleted].pop()
    
    min = Number.MAX_SAFE_INTEGER
  }


	return ans;
}

// Function to sort the given array
// using the patience sorting
function patienceSorting(arr) {
  console.log(chalk.blue(`original array: ${arr}\n`))

	// Store all the created piles
	let piles = [];

	// Traverse the array
	for (let val of arr) {

		// If no piles are created, then create it
		if (piles.length===0) {
      // val is the current selected value from array
      // we wrap val with [] so it will create a array of some value in it
      // and we push that array into array
      // so piles is, I.E., a 2d dimensional array
      piles.push([val]);
      process.stdout.write(`pile is created with: ${chalk.underline.yellow(val)} as the bottom value ==> `)
      console.log(piles)
		}else {

			// Check if top element of each pile
			// is less than or equal to
			// current element or not
			let flag = 1;

			// for each pile from piles(the 2d array)
			for (let pile of piles) {

				// Check if the element to be inserted(val) is less than current pile's top(topValOfPile)
        const topValOfPile = pile[pile.length-1];
        process.stdout.write(`${val}<${topValOfPile} ? `)
				if (val < topValOfPile) {
          // push the element to be inserted to the top of the pile
					pile.push(val);
          
          process.stdout.write(chalk.greenBright(`yes ==> `))
          console.log(piles)

					//  if this is false, we do not need to create, yet, another pile
          // if this is true, then we need to create a new pile(below is the definition, after break)
          // the reason we need to create a new pile is because there is no possible position for out current value
					flag = 0;

          // just break from the loop, because we want to check for the next value(of arr)
					break;
				}else{
          process.stdout.write(`${chalk.redBright("nah")}\n`)
          // console.log(piles)
        }
			}

      // create a new pile if necessary
			if (flag) {
        piles.push([val]);
        process.stdout.write(`create a new pile with ${chalk.underline.yellow(val)} as the bottom value ==> `)
        console.log(piles)
			}
		}
	}

	// Store the sorted sequence
	// of the given array
	let ans = [];

	// Sort the given array
  console.log(chalk.blue(`\n\n merge `))
	ans = merge_piles(piles,arr);

	return ans;
}

let arr = [6, 12, 2, 8, 3, 7];
arr = patienceSorting(arr);
console.log(chalk.greenBright("sorted arr: "+arr))

/* reference
https://www.geeksforgeeks.org/patience-sorting/
*/