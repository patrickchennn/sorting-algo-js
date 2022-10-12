const arr = [7,2,4,1,5,3];

for(let i=1; i<arr.length; i++){
  console.log(`ITERATION #${i}:`);
  let currVal = arr[i];
  let j=i-1;
  let key;
  console.log(`curr value: ${currVal}`)
  // shifting part
  while(j>=0 && arr[j]>currVal){
    arr[j+1] = arr[j];
    key = j;
    j--;
    console.log(arr);
  }
  arr[key] = currVal;
  console.log(`final shift: ${arr}\n\n`);
}

console.log(arr);