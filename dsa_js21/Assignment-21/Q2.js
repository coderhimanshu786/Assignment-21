

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findDistance(root, node1, node2) {
    // Step 1: Find the lowest common ancestor (LCA) of the two nodes
    const lca = findLCA(root, node1, node2);
  
    // Step 2: Calculate the distances from the LCA to both nodes
    const distance1 = findDistanceFromNode(lca, node1, 0);
    const distance2 = findDistanceFromNode(lca, node2, 0);
  
    // Step 3: Add the distances together to get the total distance
    return distance1 + distance2;
  }
  
  function findLCA(node, node1, node2) {
    if (node === null) return null;
  
    if (node.value > node1.value && node.value > node2.value) {
      return findLCA(node.left, node1, node2);
    } else if (node.value < node1.value && node.value < node2.value) {
      return findLCA(node.right, node1, node2);
    } else {
      return node;
    }
  }
  
  function findDistanceFromNode(node, target, distance) {
    if (node === null) return -1;
  
    if (node.value === target.value) {
      return distance;
    } else if (node.value > target.value) {
      return findDistanceFromNode(node.left, target, distance + 1);
    } else {
      return findDistanceFromNode(node.right, target, distance + 1);
    }
  }
  
  // Create the Binary Search Tree
  //Example--1
//   const root = new TreeNode(8);
//   root.left = new TreeNode(3);
//   root.right = new TreeNode(10);
//   root.left.left = new TreeNode(1);
//   root.left.right = new TreeNode(6);
//   root.right.right = new TreeNode(14);
//   root.right.left = new TreeNode(13);
//   root.left.right.left = new TreeNode(4);
//   root.left.right.right = new TreeNode(7);

//   const node1 = root.left.right; // Node with value 6
//   const node2 = root.right.right;     // Node with value 7

//Example--2
const root = new TreeNode(8);
  root.left = new TreeNode(3);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(6);
  root.left.right = new TreeNode(4);
  root.right.right = new TreeNode(7);
  root.right.left = new TreeNode(10);
  root.left.right.left = new TreeNode(14);
  root.left.right.right = new TreeNode(13);

  const node1 = root.left; // Node with value 3
  const node2 = root.left.right;     // Node with value 4
  
  
  // Find the distance between the two nodes in the BST
  const distance = findDistance(root, node1, node2);
  
  console.log(`Distance between ${node1.value} and ${node2.value} :=> ${distance}`);
  