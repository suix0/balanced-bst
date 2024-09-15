function Node() {
  const data = null;
  const left = null;
  const right = null;
  return { data, left, right };
}

function removeDuplicates(arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = null;
  }
  return Object.keys(hash).map((key) => parseInt(key));
}

function Tree(array) {
  function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  function getRoot() {
    return root
  }

  function buildTree(arr, low, high) {
    if (low > high) {
      return null;
    }
    const mid = Math.ceil((low + high) / 2);
    let root = Node();
    root.data = arr[mid];
    root.left = buildTree(arr, low, mid - 1);
    root.right = buildTree(arr, mid + 1, high);
    return root;
  }
  // root attribute
  let root;
  // Sort the array
  const sortedArr = array.sort((a, b) => a - b);
  // Remove duplicates
  const cleansedArr = removeDuplicates(sortedArr);
  root = buildTree(cleansedArr, 0, cleansedArr.length - 1)
  
  function insert(value, rootRef = root) {
    if (rootRef === null) {
      rootRef = Node();
      rootRef.data = value;
      return rootRef;
    }
    
    if (rootRef.data > value) {
      rootRef.left = insert(value, rootRef.left);
      return rootRef
    } else if (rootRef.data < value){
      rootRef.right = insert(value, rootRef.right);
      return rootRef
    } else {
      console.log('Value already exists.');
      return rootRef
    }
  }

  function deleteValue(value, rootRef = root) {
    // case for leaf node
    if (rootRef.data === value && rootRef.left === null && rootRef.right === null) {
      rootRef = null;
      return rootRef;
    } else if (rootRef.data === value && (rootRef.left === null && rootRef.right !== null)) { //
      // case for node with one child on the right
      rootRef = rootRef.right;
      return rootRef;
    }  else if (rootRef.data === value && (rootRef.left !== null && rootRef.right === null)) {
      // case for node with one child on the left
      rootRef = rootRef.left;
      return rootRef;
    }

    // case for node with two child

    // recursive case
    if (rootRef.data > value) {
      rootRef.left = deleteValue(value, rootRef.left);
      return rootRef;
    } else if (rootRef.data < value){
      rootRef.right = deleteValue(value, rootRef.right);
      return rootRef;
    } 
  }

  return { root, prettyPrint, insert, getRoot, deleteValue }
} 

const bst = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
// bst.prettyPrint(bst.getRoot())
bst.insert(21);
bst.insert(2);
bst.prettyPrint(bst.getRoot());