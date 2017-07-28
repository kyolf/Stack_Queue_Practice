'use strict';

function createNodeQueue(data,next=null, prev=null){
  return ({
    data,
    next,
    prev
  });
}
//Queue order
//last <- node <- first
class Queue{
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(value){
    const node = createNodeQueue(value);
    if(this.last){
      node.next = this.last;
      this.last.prev = node;
    }

    this.last = node;

    if(this.first === null){
      this.first = node;  
    }
  }

  dequeue(){
    if(this.first=== null){
      throw new Error('Can not dequeue Empty List');
    }

    const node = this.first;
    this.first = node.prev;
    this.first.next = null;
    
    if(node === this.last){
      this.last === null;
    }

    return node.data;
  }
}

function displayQueue(queue){
  if(queue.first === null){
    console.log('Empty list');
    return;
  }
  let node = queue.first;
  while(node.prev !== null){
    console.log(node.data);
    node = node.prev;
  }
  console.log(node.data);
}

console.log('////////////////////////');
console.log('Queue');
console.log('////////////////////////');
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log('////////////////////////');
console.log('Queue Dequeue');
console.log('////////////////////////');
console.log(q.dequeue());

console.log('////////////////////////');
console.log('Queue After dequeue');
console.log('////////////////////////');
console.log(q);

console.log('////////////////////////');
console.log('Queue Display');
console.log('////////////////////////');
console.log(displayQueue(q));