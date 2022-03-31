

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
    
    min(current = this.root) {
      //return the smallest integer data
      while (current.left !== null) {  
       current = current.left;
      } 
      return current;
    
    }
    
    minRecursive(current = this.root) {
      //using recursive, finding the minumum
      //a method that called itself
      if(current.left !== null){
        return this.minRecursive(current.left)
      }
      else{
        return current
      }
    
    }
    
    max(current = this.root) {
      //return the largest integer data
        while (current.right !== null) {  
       current = current.right;
      } 
      return current;
    }
    
    maxRecursive(current = this.root) {
        //using recursive, finding the maximum
          if(current.right !== null){
        return this.maxRecursive(current.right)
      }
      else{
        return current
      }
    }
  
    insert(newVal){
    // construct a new node and insert into the current tree
  
      const newNode = new Node(newVal);
      
      if(this.isEmpty()) {
        this.root = newNode;
        return;
      }
      
      let current = this.root;
      if (newVal === current.data){
        //what do if it's already in the tree??
        return "already in tree";
        // do you wanna skip it? 
        // i guess it'll just return since there probaby shouldn't be duplicates. OK looks good
        //thanks fam 
      }
      while(current) {
        if (newVal < current.data){
          if(current.left){
            current = current.left;
          }else{
            current.left = newNode;
            return;
          }
      }else{ // if newVal >= current.data
          if(current.right){
            current = current.right;
          }else{
            current.right = newNode;
            return;
          }
      }
    }
    }
  
    insertRecursive(newVal, curr=this.root){
      let newNode = new Node(newVal)
      // let parent = curr;
      if(!this.root){
        this.root = newNode;
        return
      }
  
      if(newVal<curr.data){
          if(!curr.left){
            curr.left = newNode;
          }else{
            return this.insertRecursive(newVal, curr.left)
          }
        }else{
          if(!curr.right){
            curr.right = newNode;
          }else{
            return this.insertRecursive(newVal, curr.right)
          }
        }
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
  let low = threeLevelTree.min()
  console.log("Min: " + low);
  
  