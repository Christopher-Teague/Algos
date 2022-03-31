class Node {

    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  
  class DoublyLinkedList {
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    toArray() {
      const vals = [];
      let runner = this.head;
  
      while (runner) {
        vals.push(runner.data);
        runner = runner.next;
      }
      return vals;
    }
  
  
    insertAtFront(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let temp = this.head
        temp.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      return this;
      //insert a node at front
    }
  
    insertAtBack(data) {
      const newTail = new Node(data);
  
      if (!this.head) {
        // if no head set the newTail to be both the head and the tail
        this.head = newTail;
        this.tail = newTail;
      } else {
        this.tail.next = newTail;
        newTail.prev = this.tail;
  
        this.tail = newTail;
      }
      return this;
      //insert a node at back
    }
  
    remove(data){
      // remove the nodes with the search data.
      // if data does not exist return "data not present"
      //if empty return ""
      let runner = this.head;
        while (runner) {
          if(runner.data == data){
            runner.prev.next = runner.next;
            runner.next.prev = runner.prev;
            runner.next = null;
            runner.prev = null; 
          }
          runner = runner.next;  
        }
    
    }
    
    
    
    
    
      // insert a new node of the given data right after the target node
    append(target, newData){
      let runner = this.head;
      var node = new Node(newData)
      while (runner){
        if (runner.data == target) {
          if(runner== this.tail){
            this.insertAtBack(newData)
          }else{
          node.next = runner.next;
          runner.next.prev = node;
          runner.next = node;
          node.prev = runner;
          }
        }
        runner = runner.next;
      }
    }
  
  }
  // let emptyList = new DoublyLinkedList();
  
  // console.log(emptyList.toArray());
  
  let list1 = new DoublyLinkedList();
  list1.insertAtFront(1);
  list1.insertAtFront(2);
  list1.insertAtFront(3);
  list1.insertAtFront(4);
  // console.log(list1.toArray());
  
  let list2 = new DoublyLinkedList();
  list2.insertAtFront(1);
  list2.insertAtFront(2);
  list2.insertAtFront(3);
  list2.insertAtFront(2);
  list2.insertAtFront(5);
  list2.insertAtFront(6);
  // console.log(list2.toArray());
  
  // console.log(list2.toArray());
  
  list2.remove(2);
  console.log(list2.toArray());
  
  list2.append(1, 4);
  console.log(list2.toArray());
  
  