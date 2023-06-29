// Time Complexity: O(N), for complete traversal of the tree.
// Auxiliary Space: O(N).


class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class DoublyLinkedListNode {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  function convertToDoublyLinkedList(root) {
    let prev = null;
    let head = null;
  
    convertHelper(root);
  
    function convertHelper(node) {
      if (node === null) return;
  
      // Recursively convert the left subtree
      convertHelper(node.left);
  
      // Create a new doubly linked list node
      const current = new DoublyLinkedListNode(node.value);
  
      // Set the "next" pointer
      if (prev !== null) {
        prev.next = current;
      } else {
        // If prev is null, it means this is the first node (head)
        head = current;
      }
  
      // Set the "prev" pointer
      current.prev = prev;
  
      // Update the previous node
      prev = current;
  
      // Recursively convert the right subtree
      convertHelper(node.right);
    }
  
    return head;
  }
  
  // Create the binary tree
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(30);
  root.right.right = new TreeNode(35);
  
  // Convert the binary tree to a doubly linked list
  const head = convertToDoublyLinkedList(root);
  
  // Print the doubly linked list in both forward and backward directions
  function printDoublyLinkedList(head) {
    let current = head;
    let listValuesForward = [];
    let listValuesBackward = [];
  
    while (current !== null) {
      listValuesForward.push(current.value);
      current = current.next;
    }
  
    current = head;
  
    while (current !== null) {
      listValuesBackward.push(current.value);
      current = current.prev;
    }
  
    console.log('Doubly Linked List (Forward):', listValuesForward.join(' -> '));
    // console.log('Doubly Linked List (Backward):', listValuesBackward.join(' -> '));
  }
  
  printDoublyLinkedList(head);
  