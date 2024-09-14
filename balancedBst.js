function Node() {
  const root = null;
  const left = null;
  const right = null;
  return { root, left, right };
}

function removeDuplicates(arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = null;
  }
  return Object.keys(hash).map((key) => parseInt(key));
}

function Tree(array) {
  // root attribute
  let root;

  // Sort the array
  const sortedArr = array.sort((a, b) => a - b);
  // Remove duplicates
  const cleansedArr = removeDuplicates(sortedArr);

  function buildTree(arr, low, high) {
    
  }
} 

// const bst = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])