const arr = [8,3,5,6,4,1,2,7,9]; // arr.length = 8


function actualMerge(arr,left,right){
  let i=0, j=0, k=0;
  let m = left.length;
  let n = right.length;

	while (i<m && j<n) {
		if(left[i]<=right[j]){
			arr[k]=left[i]
			i++
		}else{
			arr[k]=right[j];
			j++;
		}
		k++;
	}
	
	while (i < m){
		console.log(`i<m ? ${i} < ${m} ==> ${i<m}`);
		arr[k++] = left[i++];
	}
	while (j < n) {
		console.log(`j<n ? ${j} < ${n} ==> ${j<n}`);
		arr[k++] = right[j++];
	}
	console.log("left: ", left);
	console.log("right: ", right);
	console.log("merge result: ",arr,'\n');
}
// [8,3,5,6,4,1,2,7]


function merge(arr){
  if(arr.length<2) return;
  let mid = Math.floor(arr.length/2);

	
	// Left subarray
	const left = new Array(mid);
	for(let i=0; i<mid; i++) left[i] = arr[i];
	
	// Right subarray
	const right = new Array(arr.length-mid);
	for(let i=mid; i<arr.length; i++) right[i-mid] = arr[i];


	printNoEnter(left);
	process.stdout.write(' | ');
	printNoEnter(right);
	console.log('\n');

  merge(left);
  merge(right);
	

	console.log("conquer and combine part");
  actualMerge(arr,left,right);
}
// [8,3,5,6,4,1,2,7]

merge(arr);
console.log(arr)




function printNoEnter(arr){
	process.stdout.write("[ ");
	for(let val of arr){
		process.stdout.write(`${val} `);
	}
	process.stdout.write("]");
}
