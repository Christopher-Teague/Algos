class Stack{
    constructor(){
        this.items=[]
        this.capacity= 10
    }

    push(item){
        this.items.push(item);
        //add an item at the top
    }

    pop(item){
        var popped = this.items.pop();
        return popped;
        //remove the top/last item from the stack 
        //return the removed item
    }

    peek(){
        var peekTop = this.items[this.items.length - 1];
        // console.log(peekTop)
        return peekTop
    }

    size(){
        var stackSize = this.items.length;
        console.log(stackSize);
        return stackSize
    }

    isEmpty(){
        if (this.length == 0){
          return "Empty Stack";
        } else {
          return "Stack is NOT Empty";
        }
        // check if the stack is empty
    }

    isFull(){
        if(this.items.length == this.capacity){
          return "Stack is FULL"
        }
        return "Stack is NOT full"
    }
    
    printStack(){
        console.log("TOP");
        for(var i=this.items.length-1; i >= 0; i--){
            console.log(this.items[i])
        }
    }
}

var stack1 = new Stack()
//TESTING PUSH
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.push(6);
stack1.push(7);
stack1.push(8);
stack1.push(9);
stack1.push(10);
console.log(stack1.items.reverse().toString());
stack1.printStack() //expected: top 5,4,3,2,1
console.log("POP:",stack1.pop());
console.log("new stack:")
stack1.printStack(); //expected: top 4,3,2,1
console.log("Peek: " + stack1.peek()); 
console.log(stack1.isEmpty()); 
console.log(stack1.isFull());


// TESTING POP()
// console.log(stack1.pop());  //expected: 5
// stack1.printStack() // expected: top 4,3,2,1