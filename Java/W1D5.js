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

    // ----------- Week 1 Day 5 algo ------------
    
    secondToLast(){
      var follower
      var runner = this.head
      while(runner.next){
        follower = runner
        runner =runner.next
      }
      console.log(follower.val)
        //return the value of the second to last node in the list.
        // a list with 1 node? an empty list?
    }
 
    removeVal(num){
      var follower =this.head
      var runner = this.head.next
      while(runner.val != num){ 
        follower = runner
        runner =runner.next
        }
      follower.next = runner.next
      console.log("removed: " + num)
    }
      
        
      
        
        
        
        //Remove the node that has the matching given value
        //HINT: The list is constructed by connecting nodes with pointers
        // Play with the pointers so that you can remove that node from the list. 

    prepend(newVal, targetVal){
        //Insert a new node before a node that has the given target value
        var follower;
        var runner = this.head;
        while (runner.val != targetVal) {
          follower = runner;
          runner = runner.next;
        }
        var newNode = new Node(newVal);
        follower.next = newNode;
        newNode.next = runner;
    }

    // My personal favourite on SLL
    hasLoop(){
        //determine whether this SLL has a loop
    }
    // ------------ END OF Week 1 Day 5 algo ------------

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

var a = new Node(1)
var b = new Node(2)
var c = new Node(3)
var d = new Node(4)
var e = new Node(5)
var f = new Node(6)
var g = new Node(7)
var h = new Node(8)
var i = new Node(9)
var j = new Node(10)
a.next = b;
b.next = c; 
c.next = d; 
d.next = e; 
e.next = f; 
f.next = g; 
g.next = h; 
h.next = i; 
i.next = j; 
j.next = null; 
var list1 = new SLL();
list1.head = a;
list1.printList();
console.log("---- second to last ----")
list1.secondToLast()
console.log("-------------------")
console.log("---- remove value ----")

list1.removeVal(4)
list1.printList();

console.log("-------------------");
console.log("Testing Prepend: prepend(8,5)");
list1.prepend(8,5)
list1.printList();