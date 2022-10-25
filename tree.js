import chalk from "chalk";

class Node {
  constructor(item) {
    this.val = item;
    this.left = this.right = null;
  }
}

let root = new Node();
root = null;

function insertRec(root,val) {

  /* If the tree is empty,
  return a new node */
  if (root == null) {
    root = new Node(val);
    return root;
  }
  
  /* Otherwise, recur
  down the tree */
  if (val < root.val){
    console.log(chalk.blue(`${val} < ${root.val}`))

    root.left = insertRec(root.left, val);
  }else if (val > root.val){
    console.log(chalk.yellow(`${val} > ${root.val}`))
    root.right = insertRec(root.right, val);
  }

  /* return the root */
  return root;
}

// A function to do
// inorder traversal of BST
function inorderRec(root) {
  if (root != null) {
    inorderRec(root.left);
    console.log(`${root.val} `);
    inorderRec(root.right);
  }
}

function insert(val){
  root = insertRec(root,val);
}

function treeins(arr) {
  for (let val of arr) {
    insert(val);
  }
}


function main(){
  let arr = [11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31];
  treeins(arr);
  inorderRec(root);
}

main();

