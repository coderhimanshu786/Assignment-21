// Time Complexity: O(N), for complete traversal of the tree.
// Auxiliary Space: O(N), for storing the nodes in the deque.

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function convertToBST(root) {
    const values = [];
    inorderTraversal(root, values);
    values.sort((a, b) => a - b);
    return constructBST(values, 0, values.length - 1);
  }
  
  function inorderTraversal(node, values) {
    if (node === null) return;
    inorderTraversal(node.left, values);
    values.push(node.value);
    inorderTraversal(node.right, values);
  }
  
  function constructBST(values, start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(values[mid]);
    node.left = constructBST(values, start, mid - 1);
    node.right = constructBST(values, mid + 1, end);
    return node;
  }
  
  function printInorderTraversal(node) {
    if (node === null) return;
    printInorderTraversal(node.left);
    console.log(node.value);
    printInorderTraversal(node.right);
  }
  
  // Example binary tree
  const root = new TreeNode(10);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(8);
  root.left.right = new TreeNode(4);
  
  // Convert binary tree to binary search tree
  const bstRoot = convertToBST(root);
  
  // Print the values of the binary search tree using inorder traversal
  printInorderTraversal(bstRoot);
  