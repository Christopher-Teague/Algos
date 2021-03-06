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
        if (this.root === null) {
            return true;
        }
        return false;
    }


    insert(newVal) {
        let newNode = new Node(newVal)
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let curr = this.root;

        while (newVal < curr.data) {
            if (!curr.left) {
                curr.left = newNode;
                return
            }
            curr = curr.left;
        }
        while (newVal > curr.data) {
            if (!curr.right) {
                curr.right = newNode;
                return
            }
            curr = curr.right;
        }


    }

    insertRecursive(newVal, curr = this.root) {
        let newNode = new Node(newVal)
        // let parent = curr;
        if (!this.root) {
            this.root = newNode;
            return
        }

        if (newVal < curr.data) {
            if (!curr.left) {
                curr.left = newNode;
            } else {
                return this.insertRecursive(newVal, curr.left)
            }
        } else {
            if (!curr.right) {
                curr.right = newNode;
            } else {
                return this.insertRecursive(newVal, curr.right)
            }
        }
    }

    printInOrder(curr = this.root) {
        if (!curr) {
            return;
        }
        this.printInOrder(curr.left);
        console.log(curr.data);
        this.printInOrder(curr.right);
    }



    printPreOrder(curr = this.root) {
        if (!curr) {
            return
        }
        console.log(curr.data);
        this.printInOrder(curr.left);
        this.printInOrder(curr.right);
    }

    printPostOrder(curr = this.root) {
        if (!curr) {
            return
        }
        this.printInOrder(curr.left);
        this.printInOrder(curr.right);
        console.log(curr.data);
    }

    arrInOrder(curr = this.root, result = []) {
        //return an array sorted in order
        // Break case
        if (!curr) {
            return;
        }
        this.arrInOrder(curr.left, result);
        result.push(curr.data);
        this.arrInOrder(curr.right, result);

        return result;
    }




    arrPreOrder(curr = this.root, result = []) {
        if (!curr) {
            return;
        }
        result.push(curr.data);
        this.arrPreOrder(curr.left, result);
        this.arrPreOrder(curr.right, result);

        return result;
    }


    arrPostOrder(curr = this.root, result = []) {
        if (!curr) {
            return;
        }
        this.arrPostOrder(curr.left, result);
        this.arrPostOrder(curr.right, result);
        result.push(curr.data);

        return result;
    }


    size(curr = this.root) {
        //count the total nodes inside the tree
        if (!curr) {
            return 0;
        }
        return 1 + this.size(curr.left) + this.size(curr.right);
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



let insertTree = new BinarySearchTree()
insertTree.insertRecursive(10);
insertTree.insertRecursive(5);
insertTree.insertRecursive(15);
insertTree.insertRecursive(2);
insertTree.insertRecursive(8);
insertTree.insertRecursive(12);
insertTree.insertRecursive(20);

insertTree.print();
// insertTree.printInOrder();
// console.log("preOrder")
// insertTree.printPreOrder();
// console.log("postOrder")
// insertTree.printPostOrder();
console.log(threeLevelTree.arrInOrder());
console.log(threeLevelTree.arrPreOrder());
console.log(threeLevelTree.arrPostOrder());