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
    if(this.first === null){
      return null;
    }

    const node = this.first;
    this.first = node.prev;
    if(this.first !== null){
      this.first.next = null;
    }

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

function squareDancing(arr,queue){
  let firstPerson = arr[0];
  for(let i = 1; i< arr.length; i++){
    if(firstPerson && firstPerson.charAt(0) !== arr[i].charAt(0)){
      if(firstPerson.charAt(0) === 'M'){
        console.log(`Female dancer: ${arr[i].slice(2)} and Male dancer: ${firstPerson.slice(2)}`);
      }
      else{
        console.log(`Female dancer: ${firstPerson.slice(2)} and Male dancer: ${arr[i].slice(2)}`);
      }
      firstPerson = queue.dequeue();
    }
    else{
      if(!firstPerson){
        firstPerson = arr[i];
      }else{
        queue.enqueue(arr[i]);
      }
    }
  
  }
  let counter = 0;
  let inQueue = queue.first;
  while(inQueue !== null){
    counter++;
    inQueue = inQueue.prev;
  }
  
  if(firstPerson !== null){
    if(firstPerson.charAt(0) === 'M'){
      console.log(`There are ${counter+1} male(s) in the queue`);
    }
    else{
      console.log(`There are ${counter+1} female(s) in the queue`);
    }
  }
}

function bankSimulation(arr, queue){
  for(let i = 0; i < arr.length;i++){
    if(Math.random() <= 0.25){
      console.log(`Customer ${arr[i]} fail to provide correct documents`);
      queue.enqueue(arr[i]);
    }
    else{
      console.log(`Customer ${arr[i]} provided correct documents`);
    }
  }
  let queueInc = queue.first;
  while(queueInc !== null){
    if(Math.random() <= 0.25 ){
      const failCustomer = queue.dequeue();
      console.log(`Customer ${failCustomer} fail to provide correct documents`);
      queue.enqueue(failCustomer);
      queueInc = queue.first;
    }
    else{
      const successCustomer = queue.dequeue();
      console.log(`Customer ${successCustomer} provided correct documents`);
      queueInc = queue.first;
    }
    
  }
}

// console.log('////////////////////////');
// console.log('Queue');
// console.log('////////////////////////');
// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);

// console.log('////////////////////////');
// console.log('Queue Dequeue');
// console.log('////////////////////////');
// console.log(q.dequeue());

// console.log('////////////////////////');
// console.log('Queue After dequeue');
// console.log('////////////////////////');
// console.log(q);

// console.log('////////////////////////');
// console.log('Queue Display');
// console.log('////////////////////////');
// console.log(displayQueue(q));

// console.log('////////////////////////');
// console.log('Queue Square Dancing');
// console.log('////////////////////////');
// const q1 = new Queue();
// const arr = ['F Jane',
//              'M Frank',
//              'M John',
//              'M Sherlock',
//              'F Madonna',
//              'M David',
//              'M Christopher',
//              'F Beyonce'];
// squareDancing(arr,q1);

// const q2 = new Queue();
// const arr1 = ['F Jane',
//              'M Frank',
//              'F Beyonce',
//              'M John',
//              'M Sherlock',
//              'F Madonna',
//              'M David',
//              'F Amy',
//              'M Christopher',
//              'F JoJo',
//              'F Li'];
// squareDancing(arr1,q2);

const q4 = new Queue();
const arr2 = [0,1,2,3,4,5,6];
bankSimulation(arr2 ,q4);