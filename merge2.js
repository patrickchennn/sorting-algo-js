// arr.length = 8
const arr = [8,3,5,6,4,1,2,7];



function actualMerge(arr,left,mid,right){
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
// [8,3,5,6,4,1,2,7]


function merge(arr,l,r){
  if(l>=r) return;
  let mid = l + Math.floor((r-l)/2);
  
  
	printNoEnter(arr,l,mid);
	process.stdout.write(' | ');
	printNoEnter(arr,mid+1,r);
	console.log('\n');
  
  merge(arr,l,mid);
  merge(arr,mid+1,r);

	console.log("conquer and combine part");
  actualMerge(arr,l,mid,r);
}
// [8,3,5,6,4,1,2,7]

merge(arr,0,arr.length-1);
console.log(arr)




function printNoEnter(arr,x,y){
	process.stdout.write("[ ");
	for(let i=x; i<=y; i++){
		process.stdout.write(`${arr[i]} `);
	}
	process.stdout.write("]");
}
