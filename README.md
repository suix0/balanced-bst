# Balanced Binary Search Tree

> A JavaScript implementation of a self-balancing binary search tree — insertion, deletion, BFS/DFS traversals, height, depth, and rebalancing. The Odin Project CS section.

---

## About

This project implements a **balanced binary search tree (BST)** in vanilla JavaScript as part of the Computer Science section of [The Odin Project's Full Stack JavaScript curriculum](https://www.theodinproject.com/lessons/javascript-binary-search-trees).

A BST is a tree data structure where each node holds a value, with all values in the left subtree being smaller and all values in the right subtree being larger. A *balanced* BST ensures the height difference between left and right subtrees never exceeds 1 — keeping operations close to **O(log n)**.

---

## Concepts Demonstrated

- Recursive tree construction from a sorted array
- BST insertion and deletion (all 4 cases: leaf, one child left, one child right, two children with inorder successor)
- BFS traversal via level-order with a queue
- DFS traversals — pre-order, in-order, and post-order
- Height and depth calculation
- Balance checking via subtree height comparison
- In-place rebalancing by extracting sorted values and rebuilding

---

## Implementation

### `Tree(array)`

The main factory function. Accepts an unsorted array, deduplicates it, sorts it, and builds a balanced BST.

| Method | Description |
|--------|-------------|
| `insert(value)` | Recursively inserts a value into the correct position |
| `deleteValue(value)` | Removes a node, handling all 4 deletion cases |
| `find(value)` | Returns the node with the given value, or logs an error |
| `levelOrder(callback)` | BFS traversal — visits nodes level by level |
| `preOrder(callback)` | DFS — visits root → left → right |
| `inOrder(callback)` | DFS — visits left → root → right (sorted order) |
| `postOrder(callback)` | DFS — visits left → right → root |
| `height(node)` | Returns the height of a given node |
| `depth(node)` | Returns the depth of a given node from root |
| `isBalanced()` | Returns `true` if the tree is balanced |
| `rebalance()` | Rebuilds the tree from an in-order traversal |
| `prettyPrint(node)` | Prints a visual representation of the tree to the console |

---

## Driver Script

`driverScript.js` runs a full demonstration:

1. Builds a BST from a randomly generated array
2. Confirms the tree is balanced via `isBalanced()`
3. Prints all four traversals (level, pre, in, post order)
4. Unbalances the tree by inserting additional values
5. Confirms the tree is now unbalanced
6. Rebalances via `rebalance()`
7. Confirms balance is restored
8. Prints all four traversals again

---

## Usage

```bash
# Clone the repo
git clone https://github.com/nethangabrielb/balanced-bst.git
cd balanced-bst

# Run the driver script
node driverScript.js
```

### Sample Output

```
┌── 6345
│   └── 324
└── 67
    └── 23
        └── 9
            └── 8
                └── 7
                    └── 6
                        └── 5
                            └── 4
                                └── 3
                                    └── 1

Is the tree balanced?
true

Pre order traversal:
8 4 2 1 3 6 5 7 23 9 67 324 6345
```

---

## Files

| File | Description |
|------|-------------|
| `balancedBst.js` | `Node` factory, `Tree` factory with all BST methods |
| `driverScript.js` | Demonstration script exercising all methods |

---

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) — for the curriculum and project brief
