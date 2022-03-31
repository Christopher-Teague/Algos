
/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
 class Node {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    isEmpty() {
      // determine if the BST is empty and return a boolean
      if(this.root === null) {
        return true;
      } 
      return false;
    }
  
  // if searchVal == root - return true
  // if searchVal > root - move right
  // else move left
  
    contains(searchVal){
      //Determine if the tree contains the given searchVal
      if(this.root == null) {
        return false;
      }
      if(this.root.data == searchVal) {
        return true;
      } else {
        var runner = this.root;
        while(runner) {
          if(searchVal == runner.data) {
            return true;
          } else {
            if(searchVal < runner.data) {
              runner = runner.left;
            } else {
              runner = runner.right
            }
          }
        }
        return false;
      }
    }
  // take a look at the constructor of a node. I think they don't call it as a .val 
  
  //
  
  
    containsRecursive(searchVal, runner=this.root){
  
      // const runner = this.root;
      if (!runner) {
        return false;
      }
      if (searchVal === runner.data) {
          return true;
      } else if (searchVal > runner.data) {
        return this.containsRecursive(searchVal, runner.right);
        // containsRecursive(searchVal, runner.right)
      } else if (searchVal < runner.data) {
        return this.containsRecursive(searchVal, runner.left);  
      }
                //  =)     
      //Determine if the tree contains the given searchVal using recursive
    }
  
  
  
    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
      if (!node) {
        return;
      }
  
      spaceCnt += spaceIncr;
      this.print(node.right, spaceCnt);
  
      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
          `${node.data}`
      );
  
      this.print(node.left, spaceCnt);
    }
  }
  
  const emptyTree = new BinarySearchTree();
  const oneNodeTree = new BinarySearchTree();
  oneNodeTree.root = new Node(10);
  
  
  /* twoLevelTree
          root
          10
        /   \
      5     15
  */
  const twoLevelTree = new BinarySearchTree();
  twoLevelTree.root = new Node(10);
  twoLevelTree.root.left = new Node(5);
  twoLevelTree.root.right = new Node(15);
  twoLevelTree.root.left.left = new Node(2);
  twoLevelTree.root.right.right = new Node(20);
  // twoLevelTree.print();
  
  
  /* threeLevelTree
                      root
                  <-- 10 -->
                /            \
              5             15
            /    \         /    \
          2       8      12     20
  
          constainsRecursive(searchVal = 30, runner =null)
  */
  
  
  
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.root = new Node(10);
  threeLevelTree.root.left = new Node(5);
  threeLevelTree.root.right = new Node(15);
  threeLevelTree.root.left.left = new Node(2);
  threeLevelTree.root.left.right = new Node(8);
  threeLevelTree.root.right.left = new Node(12);
  threeLevelTree.root.right.right = new Node(20);
  // threeLevelTree.print();
  // let low = threeLevelTree.min()
  // console.log("Min: " + low);
  console.log(threeLevelTree.contains(20))
  
  
   console.log(threeLevelTree.containsRecursive(30))