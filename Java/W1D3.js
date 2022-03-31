class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SLL {
    constructor() {
            this.head = null;
        }

    // ------------------------------------- Week 1 Day 3 algo -------------------------------------------
    
        // construct a node with the val
        // make the new node as the front (HINT: What is the front of a Singly Linked List)
    
        //Create a new node with the given value and inserts it at the back of the list
    insertAtFront(val){
        // instantiate the node with the val
        var new_node = new Node(val)
        // put the new val into the list

        if (!this.head) {
          this.head = new_node;
        } else {
          new_node.next = this.head
          this.head = new_node;
        }
    }    

    removeHead(){
      if (!this.head) {
        return "no head";
      } 
      this.head = this.head.next;
    }
        // Remove the head (HINT: What will be the new head?)


      // var runner = this.head;
      //   // Loop until runner.next = null
      //   while (runner.next) {      
      //     runner += runner.next
      //   }
   

    //*** bonus question ***
    average(){
      if(!this.head){
            console.log("Empty list");
            return
        }
        var sum = 0;
        var counter = 0;
        var runner = this.head;
        while(runner){ // while(runner != null)
            // console.log(runner.val);
            sum += runner.val;
            runner = runner.next;
            counter ++;            
        }
        var result = sum/counter;
        return result;
    }
  


      
    //     // Find the average of all the nodes inside a Singly Linked List
    //     // HINT: How to get an average? What information do we need to generate an average?
    //     // BONUS: What if one of the nodes stored String instead of int? How do you want to handle that edge case?
    
    // ------------------------------------- END OF Week 1 Day 3 algo -------------------------------------------



    // If you want to use the following methods, please fill in the logic on your own. (You can copy from Discord if you want to)
    // ------------------------------------- Week 1 Day 2 algo -------------------------------------------
    // isEmpty(){} //empty method holder

    // insertAtBack(val){} //empty method holder

    // arrToList(arr){} //empty method holder

    printList(){
        if(!this.head){
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while(runner){ // while(runner != null)
            console.log(runner.val);
            runner = runner.next;            
        }
    }
}
    // ------------------------------------- END OF Week 1 Day 2 algo -------------------------------------------



var a = new Node(1)
var b = new Node(2)
var c = new Node(3)
a.next = b;
b.next = c; 
var list1 = new SLL();
list1.head = a;
list1.printList();

console.log("Number 1");
list1.insertAtFront(77);
list1.printList();

console.log("Number 2");
list1.removeHead();
list1.printList();                        
console.log("Number 2a");
list1.removeHead();
list1.printList();
// console.log("number 2b");
// list1.removeHead();
// list1.printList();

console.log("Number 3");
console.log( "**** Average ****")
console.log(list1.average());
console.log( "*****************")

// list1: (1) --> (2) --> (3) --> null gj    Got it!   coding PVP