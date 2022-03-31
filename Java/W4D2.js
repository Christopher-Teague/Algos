
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
  
  
    isEmpty() {
      if(!this.head && !this.tail){
        return "its empty"
      }
  
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
      this.isEmpty()
      //insert a node at front
      const runner = this.head;
       const newNode = new Node(data);
      this.head.prev = newNode;
      newNode.next = runner;
      this.head =newNode;
      
      // let runner = this.head;
      // let follower = this.tail;
      // if(!runner) {
      //   runner = newNode;
      //   // follower = newNode;
      // }
    }
  
    insertAtBack(data) {
      const newNode = new Node(data);
      if(!this.head) {
        this.head = newNode;
      }
      this.tail = newNode;
      this.tail.next = null;
      console.log('---Inserted node at tail---');
    }
  
  }
  
  
  
  const emptyList = new DoublyLinkedList();
  
  console.log(emptyList.toArray());
  
  