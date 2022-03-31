class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class SLLQueue{
    constructor(){
        this.front = null;
        this.rear = null;

    }

    front(){
        //return the front data
        return this.front.data;
    }

    enqueue(data){
        // construct a new node and add to the current queue
        var node = new Node(data);
        if (this.front == null) {
          this.front = node;
          this.rear = node;
        // } else if (this.front == this.rear) {
        //   this.rear = node;
        //   this.front.next = this.rear;
        } else {
          this.rear.next = node;
          this.rear = node;
        }
    }

    dequeue(){
        // remove and return from the front of the queue
        if (this.front == this.rear) {
          this.front = null;
          this.rear = null;
        } else {
          this.front = this.front.next;
        }
    }

    isEmpty(){
        // check if the queue is empty
        if(!this.front) {
          return "empty list";
        } return "list not empty";
    }

    contains(target) {
        // search whether the target value exists in the queue
        var runner = this.front;
        while(runner.next) {
          if (runner.data == target) {
            return true;
          }
        } return false;
      }

      printQueue(){
        console.log("Front: " + this.front.data);
        var runner = this.front;
        while(runner){
            console.log(runner.data)
            runner= runner.next;
        }
        console.log("Rear: " +this.rear.data);
    }
}


var q = new SLLQueue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
q.printQueue(); //expected: front: "a", rear : "d"

q.dequeue(); 
q.printQueue(); //expected: front: "b", rear : "d"

console.log(q.isEmpty());

console.log(q.contains("c"));
console.log(q.contains("f"));