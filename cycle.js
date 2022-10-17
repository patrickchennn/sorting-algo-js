import chalk from "chalk";

function cycleSort(arr, n){
  console.log(arr);
  // count number of memory writes
  let writes = 0;

  // traverse array elements and put it to on
  // the right place
  for (let cycle_start=0; cycle_start<n-1; cycle_start++){
    // initialize item as starting point
    let item = arr[cycle_start];
    console.log(chalk.blue(`[first] item=${item}`))
    // Find position where we put the item. We basically count all smaller elements on right side of item.

    let pos = cycle_start;
    
    for (let i=cycle_start+1; i<n; i++){
      console.log(`${arr[i]}<${item} ? ${arr[i]<item}`);
      if (arr[i] < item) pos++;
    }
    // ignore all duplicate elements
    while (item == arr[pos]) pos++;

    // If item is already in correct position
    if (pos == cycle_start) continue;

    // put the item to it's right position
    if (pos != cycle_start){
      let temp = item;
      item = arr[pos];
      console.log(chalk.blue(`[info] update.1 item=${item}`))
      arr[pos] = temp;
      arr[cycle_start] = item
      writes++;
    }
    print(arr,item,arr[pos])
// [ 10, 5, 2, 3,9,5,6]
    // Rotate rest of the cycle
    while (pos != cycle_start){
      console.log(chalk.magenta("[second] rotate rest of the cycle"))
      // let x = pos;
      pos = cycle_start;
      
      
      // Find position where we put the element
      for (let i=cycle_start+1; i<n; i++){
        console.log(`${arr[i]}<${item} ? ${arr[i]<item}`);
        if (arr[i] < item) {
          pos++;
        }
      }
      // If item is already in correct position
      if (pos == cycle_start) continue;
      
      // ignore all duplicate elements
      while (item == arr[pos]) {
        pos++;
      }
      print(arr,item,arr[pos])

      // put the item to it's right position
      if (item != arr[pos]) {
        let temp = item;
        item = arr[pos];
        console.log(chalk.blue(`[info] update.2 item=${item}`))
        arr[pos] = temp;
        arr[cycle_start] = item
        writes++;
      }
      print(arr,item,arr[pos])
      console.log("\n");
    }
  }
}
  
let arr = [ 10, 5, 2, 3,9,5,6];
let n = arr.length;
cycleSort(arr, n);
console.log(chalk.greenBright("sorted arr: "+arr))

function print(arr,x,y){
  process.stdout.write(`[ `)
  for(let val of arr){
    if(val===x || val===y){
      process.stdout.write(chalk.yellow(`${val} `))
    }else{
      process.stdout.write(`${val} `)
    }
  }
  process.stdout.write(`]\n`)

}