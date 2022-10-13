const {swap} = require("./utils");

const arr = [10,80,30,90,40,50,70];

function partition(arr,l,r){
  const pivot = arr[l];
  let i=l-1, j=r+1;
  
  console.log(`pivot=${pivot}`);
  while (true) {
    console.log(`i: arr[${i}]=${arr[i]} ==> ${arr[i]}<${pivot} ==> ${arr[i] < pivot}`);
    console.log(`j: arr[${j}]=${arr[j]} ==> ${arr[j]}>${pivot} ==> ${arr[j] > pivot}`);

    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);


    console.log(`i=${i} j=${j}`)
    if (i >= j){
      console.log(`i>=j ==> ${i}>=${j} ==> ${arr[i]}>=${arr[j]}`);
      console.log("return: ",j,'\n');
      return j;
    }
    console.log("before swap: ",arr)
    swap(arr,i,j)
    console.log("after swap: ",arr)
  }
}

function quick(arr,l,r){
  console.log(`l=${l} r=${r}`)
  if(l<r){
    const pIdx = partition(arr,l,r);
    quick(arr,l,pIdx);
    quick(arr,pIdx+1,r);
  }
}
quick(arr,0,arr.length-1);
console.log("sorted arr: ",arr);

/* resources:
https://www.geeksforgeeks.org/hoares-vs-lomuto-partition-scheme-quicksort/
*/