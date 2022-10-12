/*
version O(n2 * log(n))
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

	// Two pointers to maintain start
	// of both arrays to merge
	while (left <= mid && rightStart <= rightEnd){
		
		// If element 1 is in rightStart place
		if (arr[left] <= arr[rightStart]){
			console.log(`${arr[left]} <= ${arr[rightStart]}. So we just increment the left pointer`)
			left++;
		}else{
			// verbosity
			console.log(`${arr[left]} NOT <= ${arr[rightStart]}. So we need to put the right value to the left side, and then shift the left to right value by 1`)
			process.stdout.write("from:");
			printNoEnter(arr,left,rightEnd);
			console.log("\n")

			let rightStartValue = arr[rightStart];
			let rightStart2 = rightStart;

			// put the bigger value to left
			// and shift the array(adjust)
			while (rightStart2 > left){
				arr[rightStart2] = arr[rightStart2 - 1];
				rightStart2--;
			}
			arr[left] = rightStartValue;

			
			// verbosity
			process.stdout.write("to:")
			printNoEnter(arr,left,rightEnd);
			console.log("\n")


			// Update all the pointers
			left++;
			mid++;
			rightStart++;
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
