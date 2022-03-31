//construct Node class
class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
}
    a = new Node(5);
    b = new Node(7);
    c = new Node(9);
    console.log(a);
    a.next = b ;
    
    
    //construct SLL class
// class SLL{
//     this.google;
// }

//create a list of nodes following (1) -> (2) -> (3) -> null
// you can use the helper function printNode(node)
// you can create a new class by 
//let a = new ClassName(val)




//create a SingleLinkedList with the above nodes. (1) is the head
// you can use the helper function printList(list) 



// ---------------HELPER FUNCTION --------------------
//Print the nodes
function printNode(node){
    var str="";
    var curr = node
    while(curr){
        str+=curr.val+" -> ";
        curr=curr.next;

    }
    str+="null";
    console.log(str)

}



//Print the SLL 
function printList(list){
    if(!list.head){
        return "Empty list"
    }
    var str="";
    console.log("List head: "+list.head.val)
    var curr = list.head;
    while(curr){
        str+=curr.val+" -> ";
        curr=curr.next;

    }
    str+="null";
    console.log(str)
}