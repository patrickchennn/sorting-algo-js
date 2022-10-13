/*
version average O(n*log(n))
merge+shell sort
https://www.geeksforgeeks.org/in-place-merge-sort/
https://www.interviewkickstart.com/learn/in-place-merge-sort
*/

function merge(arr, left, mid, rightEnd){
	printNoEnter(arr,left,rightEnd);
	let rightStart = mid + 1;
	console.log(`
	left:${left}
	mid: ${mid}
	rightStart: ${rightStart}
	rightEnd: ${rightEnd}
	`);

	// If the arr already in the right place(sorted)
	if (arr[mid] <= arr[rightStart]){
		return;
	}

	let n = arr.length;
  // Start with a big gap, then reduce the gap
  for (let gap=Math.floor(n/2); gap>=1; gap=Math.floor(gap/2)){
    console.log(`\ngap: ${gap}`);
    for(let right=gap; right<n; right++){
      console.log(`right: ${right}`);
      for(let left=right-gap; left>=0; left-=gap){
        console.log(`left: ${left}`);
        console.log(`${arr[left]}>${arr[left+gap]}`)
        if(arr[left]>arr[left+gap]){
          swap(arr,left,left+gap);
        }else{
          break;
        }
      }
    }
  }

}

/* l is for left index and r is right index
of the sub-array of arr to be sorted */
function mergeSort(arr, l, r){
	if (l < r){
		let m = l + Math.floor((r - l) / 2);
    

		// printNoEnter(arr,l,m);
		// process.stdout.write(' LEFT \n');
		
		// Sort first and second halves
		mergeSort(arr, l, m);
		// printNoEnter(arr,m+1,r);
		// process.stdout.write(' RIGHT \n');

		mergeSort(arr, m + 1, r);

		merge(arr, l, m, r);
	}
}


let arr = [ 3,6,8,11,4,7,9,12 ]; // len=8	
let arr_size = arr.length;

mergeSort(arr, 0, arr_size - 1);
console.log(arr);




function printNoEnter(arr,x,y){
	process.stdout.write("[ ");
	for(let i=x; i<=y; i++){
		process.stdout.write(`${arr[i]} `);
	}
	process.stdout.write("]");
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}