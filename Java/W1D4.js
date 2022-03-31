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

    // ----------- Week 1 Day 4 algo ------------
    // hi heidi =)
    // hello :D

    // //// Contains Method //////////////////////////
    // Determines whether or not the given search value exists in this list.
    // sLogic:  val = 3
    //          ( 1 ) --> (2) --> (3) --> null
    //        return a boolean
    contains(val){
        var runner = this.head;         // Initialize runner to head of SLL
        while(runner){                  // Loop while runner != null
          if (runner.val == val) {      // If found value
            return true;                //    return true
          } else {                      // If value not found
            runner = runner.next;       //    move to next node
          }
        }
        return false;                   // If value not found, return false
    }
            
    // //// Contains Recursive Method /////////////////
    containsRecrusive(val, curr = this.head){
        // var runner = this.head;
        var counter = 0
        while(curr){
          if (curr.val = val) {
            counter ++;
            curr = curr.next;            
          } 
        }
        return counter;
    }
        
        // Determines the number of nodes that the given search value exists in this list.
        // i.e. val = 10, 
        //(10) --> (2) --> (10) --> (10) --> null 
        // This should return 3

    removeBack(){
        //remove the last node of a SLL
        // runner  = this.head;
        // while(runner.next){ //runner will be the end node
        //   runner = runner.next;
        // }
        // var endnode = runner;
    }
 
    removeBack(){
        if(!this.head.next){
            console.log("Empty list or only 1 item ");
            return
        }
        var follower; 
        var runner = this.head;
        while(runner.next !== null){
        follower = runner;
        runner = runner.next;
        }
        follower.next = null;
    }

          //remove the last node of a SLL


    // ------------ END OF Week 1 Day 4 algo ------------


    printList(){
        if(!this.head){
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while(runner){ // runner will be null at the end
            console.log(runner.val);
            runner = runner.next;            
        }
    }

}

var a = new Node(1)
var b = new Node(2)
var c = new Node(3)
var d = new Node(2)
var e = new Node(2)
a.next = b;
b.next = c; 
var list1 = new SLL();
list1.head = a;
// list1.printList();
// list1: (1) --> (2) --> (3) --> null

console.log(list1.contains(4));
console.log(list1.contains(2));
console.log(list1.containsRecrusive(2))