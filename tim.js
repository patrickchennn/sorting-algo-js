import chalk from "chalk";

const arr = [39, 13, 31, 50, 19, 23, 28, 7, 41, 30, 1, 41, 42, 47, 17, 23]; // len=16
const RUN = Math.floor(arr.length/2);

function insertionSort(arr,initialLeft,initialRight){
  console.log(chalk.blue(`insertion sort executed: [${arr}]`));
  for(let right=1+initialLeft; right<=initialRight; right++){
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
  for(let i=0; i<n; i++) R[i] = arr[mid+i+1];

	while (i<m && j<n) {
    console.log(`${L[i]} ${R[j]}`)
		if(L[i]<=R[j]){
			arr[k]=L[i]
			tempSortedArr[x++]=L[i]
			i++
		}else{
			arr[k]=R[j];
			tempSortedArr[x++]=R[j]
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
    // Sort individual subarrays of size RUN
    for (let i=0; i<n; i+=RUN)
      insertionSort(arr, i, Math.min(i+RUN-1,n-1))
 
    // Start merging from size RUN (or 32).
    // It will merge
    // to form size 64, then 128, 256
    // and so on ....
    for (let partition=RUN; partition<n; partition*=2){
        
      // pick starting point of
      // left sub array. We
      // are going to merge
      // arr[left..left+size-1]
      // and arr[left+size, left+2*size-1]
      // After every merge, we
      // increase left by 2*size
      for (let left=0; left<n; left+=2*partition){
          
        // find ending point of
        // left sub array
        // mid+1 is starting point
        // of right sub array
        let mid = left + partition - 1;
        let right = Math.min(left+2*partition-1,n-1);

        // merge sub array arr[left.....mid] &
        // arr[mid+1....right]
        if(mid<right) merge(arr, left, mid, right);
      }
    }
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