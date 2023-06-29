// Time Complexity: O(N), for complete traversal of the tree.
// Auxiliary Space: O(N).

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  }
  
  function connectNodesAtSameLevel(root) {
    if (root === null) return;
  
    let queue = [root];
  
    while (queue.length > 0) {
      const size = queue.length;
  
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
  
        if (i < size - 1) {
          node.next = queue[0];
        }
  
        if (node.left !== null) {
          queue.push(node.left);
        }
  
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
  }
  
  // Create the binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  // Connect nodes at the same level
  connectNodesAtSameLevel(root);
  
  // Print the connected nodes at the same level
  function printConnectedNodes(root) {
    let current = root;
  
    while (current !== null) {
      let node = current;
  
      while (node !== null) {
        console.log(`${node.value} -> `);
        node = node.next;
      }
  
      console.log('-1');
      current = current.left;
    }
  }
  
  printConnectedNodes(root);
  