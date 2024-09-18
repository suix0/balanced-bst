import { Node, removeDuplicates, Tree } from "./balancedBst.js";

function randomArray(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.ceil(Math.random() * 101));
  }
  return arr;
}

function traversal() {
  // Print out all elements in pre order.
  console.log('\nPre order traversal:');
  let preOrderString = '';
  bst.preOrder((node) => {
    preOrderString += `${node.data} `;
  })
  console.log(preOrderString);

  // Print out all elements in in-order.
  console.log('\nIn order traversal:');
  let inOrderString = '';
  bst.inOrder((node) => {
    inOrderString += `${node.data} `;
  })
  console.log(inOrderString);

  // Print out all elements in post order.
  console.log('\nPost order traversal:');
  let postOrderString = '';
  bst.postOrder((node) => {
    postOrderString += `${node.data} `;
  })
  console.log(postOrderString);


  // Print out all elements in level order.
  console.log('\nLevel order traversal:');
  let levelOrderString = '';
  bst.levelOrder((node) => {
    levelOrderString += `${node.data} `;
  })
  console.log(levelOrderString);
}

const array = randomArray(20);
const finalArray = removeDuplicates(array);
const bst = Tree(finalArray);

bst.prettyPrint(bst.getRoot());
// Confirm that the tree is balanced
console.log('\nIs the tree balanced?');
console.log(bst.isBalanced());

// Print out all elements in level, pre, post, and in order.
traversal(); 

// Unbalance the tree by adding several numbers > 100.
bst.insert(Math.ceil(Math.random() * 101));
bst.insert(Math.ceil(Math.random() * 101));
bst.insert(Math.ceil(Math.random() * 101));
bst.insert(Math.ceil(Math.random() * 101));
bst.insert(Math.ceil(Math.random() * 101));
bst.insert(Math.ceil(Math.random() * 101));
bst.insert(Math.ceil(Math.random() * 101));
bst.insert(Math.ceil(Math.random() * 101));
bst.insert(Math.ceil(Math.random() * 101));
bst.insert(Math.ceil(Math.random() * 101));

bst.prettyPrint(bst.getRoot());
// Confirm that the tree is balanced
console.log('\nIs the tree balanced?');
console.log(bst.isBalanced());

bst.rebalance();
bst.prettyPrint(bst.getRoot());
// Confirm that the tree is balanced
console.log('\nIs the tree balanced?');
console.log(bst.isBalanced());

// Print out all elements in level, pre, post, and in order.
traversal();