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

    insertAtFront(val){
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtBack(val){
        var d = new Node(val);      
        var runner = this.head;
        while (runner.next) {      
          runner = runner.next
        }
        runner.next = d;
    }

        // runner = this.head
    // follower = null
    // follower = runner    
    // runner = runner.next
    // 

    reverse(){
      // reverse this list in-place without using any extra list. 
    }

    removeNegatives(){
        //remove all the nodes with negative values. 
    }

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
a.next = b;
b.next = c; 
var list1 = new SLL();
list1.head = a;
list1.printList();
// list1: (1) --> (2) --> (3) --> null

