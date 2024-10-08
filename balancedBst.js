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
    } else if (rootRef.data === value && (rootRef.left !== null && rootRef.right !== null)) {
      // case for node with two child
      if (rootRef.right.left === null && rootRef.right.right === null) {
        rootRef.data = rootRef.right.data;
        rootRef.right = null;
      } else { 
        let nodeRef = rootRef.right; // pointer to the left of the right node of the node
        let inorderSucessor = nodeRef.left;
        while (inorderSucessor.left !== null) {
          nodeRef = inorderSucessor;
          inorderSucessor = inorderSucessor.left;
        } 
        rootRef.data = inorderSucessor.data;
        nodeRef.left = nodeRef.left.left !== null ? nodeRef.left.left : nodeRef.left.right;
      }
      return rootRef;
    }

    // tree traversing
    if (rootRef.data > value) {
      rootRef.left = deleteValue(value, rootRef.left);
      return rootRef;
    } else if (rootRef.data < value){
      rootRef.right = deleteValue(value, rootRef.right);
      return rootRef;
    } 
  }

  function find(value, rootRef = root) {
    if (rootRef === null) {
      console.log('No such value exists!');
      return;
    } else {
      if (rootRef.data === value) {
        return rootRef;
      } else if (rootRef.data > value) {
        return find(value, rootRef.left);
      } else if (rootRef.data < value) {
        return find(value, rootRef.right);
      } 
    }
  }

  function levelOrder(callback) {
    const rootRef = getRoot();
    if (rootRef === null) {
      return;
    }
    if (typeof callback !== 'function') {
      throw new Error('A callback is required.'); 
    }
    const queue = [];
    queue.push(rootRef);
    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode === null) {
        continue
      }
      callback(currentNode);
      queue.push(currentNode.left);
      queue.push(currentNode.right);
    }
  }

  function preOrder(callback, rootRef = root) {
    if (rootRef === null) {
      return;
    }
    if (typeof callback !== 'function') {
      throw new Error('A callback is required.'); 
    }
    callback(rootRef);
    preOrder(callback, rootRef.left);
    preOrder(callback, rootRef.right);
  }

  function inOrder(callback, rootRef = root) {
    if (rootRef === null) {
      return;
    }
    if (typeof callback !== 'function') {
      throw new Error('A callback is required.'); 
    }
    inOrder(callback, rootRef.left);
    callback(rootRef);
    inOrder(callback, rootRef.right);
  }

  function postOrder(callback, rootRef = root) {
    if (rootRef === null) {
      return;
    }
    if (typeof callback !== 'function') {
      throw new Error('A callback is required.'); 
    }
    inOrder(callback, rootRef.left);
    inOrder(callback, rootRef.right);
    callback(rootRef);
  }

  function height(node) {
    if (node === null) {
      return -1;
    }
    const leftSubtreeHeight = height(node.left);
    const rightSubtreeHeight = height(node.right);
    const finalHeight = Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
    return finalHeight;
  }

  function depth(node, rootRef = root, depthCount = 0) {
    if (rootRef === null) {
      console.log('No such node exists!');
      return;
    } else {
      if (rootRef.data === node.data) {
        return depthCount;
      } else if (rootRef.data > node.data) {
        return depth(node, rootRef.left, depthCount += 1);
      } else if (rootRef.data < node.data) {
        return depth(node, rootRef.right, depthCount += 1);
      } 
    }
  }

  function isBalanced() {
    const leftSubtreeHeight = height(getRoot().left) + 1;
    const rightSubtreeHeight = height(getRoot().right) + 1;
    if (Math.abs((leftSubtreeHeight - rightSubtreeHeight)) > 1) {
      return false;
    } else {
      return true;
    }
  }

  function rebalance() {
    const array = [];
    inOrder((node) => {
      array.push(node.data);
    });
    root = buildTree(array, 0, array.length - 1);
  }

  return { root, prettyPrint, insert, getRoot, deleteValue, find, levelOrder, preOrder, inOrder, postOrder, height, depth, isBalanced, rebalance };
} 

const bst = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

export { Node, removeDuplicates, Tree }
