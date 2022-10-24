import chalk from "chalk";

// const arr = [39, 13, 31, 50, 19, 23, 28, 7, 41, 30, 1, 41, 42, 47, 17, 23]; // len=16
const arr = [40,10,20,42,27,25,1,19] // len=8
const RUN = 2;

function insertionSort(arr,initialLeft,initialRight){
  console.log(chalk.blue(`insertion sort executed: [${arr}]`));
  for(let right=1+initialLeft; right<initialRight; right++){
    console.log(`ITERATION #${right}:`);
    let currVal = arr[right];
    let left=right-1;
    console.log(`curr value: ${currVal}`)
    // shifting part
    while(left>=initialLeft && arr[left]>currVal){
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
  console.log(chalk.greenBright(`result of insertion sort [${arr}]\n`))
}

function merge(arr,left,mid,right){
  console.log(chalk.blue(`merge sort executed: [${arr}]`));

  let i=0, j=0, k=left;
	let x=0;
  let m = mid-left+1;
  let n = right-mid;
	const tempSortedArr = []
  const L = new Array(m);
  const R = new Array(n);
  console.log(`l=${left} m=${mid} r=${right}`)
  console.log(`m=${m} n=${n}`);
  for(let i=0; i<m; i++) L[i] = arr[left+i];
  for(let i=0; i<n; i++) R[i] = arr[mid+1+i];

	while (i<m && j<n) {
    const leftVal = L[i];
    const rightVal = R[j];
    console.log(`${leftVal} ${rightVal}`)
		if(leftVal<=rightVal){
			arr[k]=leftVal
			tempSortedArr[x++]=leftVal
			i++
		}else{
			arr[k]=rightVal;
			tempSortedArr[x++]=rightVal
			j++;
		}
		k++;
	}
	
	while (i < m){
		console.log(`i<m ? ${i}<${m} ==> ${i<m}`);
		arr[k] = L[i];
		tempSortedArr[x++]=L[i]
		i++;
		k++;
	}
	while (j < n) {
		console.log(`j<n ? ${j}<${n} ==> ${j<n}`);
		arr[k] = R[j];
		tempSortedArr[x++]=R[j]
		j++;
		k++;
	}
	console.log("left: ", L);
	console.log("right: ", R);
	console.log("temp sorted arr result: ",tempSortedArr);
	console.log("merge result: ",arr,'\n');
}

function timSort(arr){
  const n=arr.length
  // Sort individual subarrays of size RUN with insertion sort
  // O(n/RUN)
  for (let i=0; i<n; i+=RUN){
    insertionSort(arr, i, i+RUN)
  }

  // we start from the smallest problem and solve it(the inner loop), and then going to solve the bigger problem(the outer loop)
  // Start merging from size RUN
  for (let size=RUN; size<n; size*=2){
    // solve sub array
    // ex:
    // suppose RUN=2; n=8; since RUN=2 therefore size=2
    // [d,b] [a,c]; [h,f] [g,e]
    // solve left subarray first which is [d,b] [a,c]
      // left=0; 
      // mid=left+size-1 ==> mid=0+2-1 ==> mid=1
      // right=min(left+2*size-1, n-2) ==> right=min(0+2*2-1, 8-1) ==> right=min(3,7) ==> right=3
      // thus the #1 merge sort will start from these indices: [0,1,3]
      // the result will be [a,b,c,d]

    // let's go for the next iteration. Solve the right subarray which is [h,f] [g,e]
      // left += 2*size ==> left = 0+2*2 ==> left=4. This is the reason why we need to multiply with 2 because the left index is not always 0.
      // mid=4+2-1 ==> mid=5
      // right=4+2*2-1 ==> right=7
      // thus #2 merge start from these indices: [4,5,7]
      // the result will be [e,f,g,h]

    // and for the #3. There is no such thing. Because 8!<8
    // therefore we break from the inner loop and multiply the size by 2 because we need to merge 2 sub array with length 4
    // left=[a,b,c,d] right=[e,f,g,h]

    for (let left=0; left<n; left+=2*size){
      console.log(`size:${size}`)
      let mid = left + size - 1;
      let right = Math.min(left+2*size-1,n-1);


      if(mid<right) merge(arr, left, mid, right);
    }
  }
  // -1 because we count from zero
}

timSort(arr);
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

/*
sorted [7,13,19,23,28,31,39,50,
unsorted 41,30,1,41,42,47,17,23]

[1,7,13,17,19,23,23,28,30,31,39,50,41,41,42,47]
*/