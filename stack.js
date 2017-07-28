'use strict';

function createNodeStack(data, next=null){
  return ({
    data,
    next
  });
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    if(this.top === null){
      this.top = createNodeStack(value);
      return;
    }
    const node = createNodeStack(value, this.top);
    this.top = node;
  }

  pop(){
    if(this.top === null){
      throw new Error('Can not pop empty list');
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack){
  if(stack.top === null){
    throw new Error('Empty list');
  }
  return stack.top.data;
}

function displayStack(stack){
  let node = stack.top;
  if(node === null){
    console.log('Empty List');
    return;
  }

  while(node.next !== null){
    console.log(node.data);
    node = node.next;
  }
  console.log(node.data);
}

// function isPalindrome(string,stack){
//   let reverseStr = '';
//   const lowerCaseStr = string.toLowerCase().replace(/[^a-z]/g, "");
//   for(let i = 0 ; i< lowerCaseStr.length; i++){
//     const char = lowerCaseStr.charAt(i);
//     stack.push(char);
//   }
//   let node = stack.top;
//   while(node !== null){
//     reverseStr += stack.pop();
//     node = node.next;
//   }
//   console.log(reverseStr);
//   if(reverseStr === lowerCaseStr){
//     return true;
//   }
//   return false;
// }

function isPalindrome(string, stack){
  const lowerCaseStr = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  for(let i = 0 ; i< lowerCaseStr.length; i++){
    const char = lowerCaseStr.charAt(i);
    stack.push(char);
  }
  console.log(lowerCaseStr);
  for(let i = 0; i< lowerCaseStr.length; i++){
    const char = lowerCaseStr.charAt(i);
    if(char !== stack.pop()){
      return false;
    }
  }
  return true;
}

///////////////////////////////////////////Testing ////////////////////////////////////
console.log('////////////////////////');
console.log('Stack');
console.log('////////////////////////');
const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log('////////////////////////');
console.log('Stack Pop');
console.log('////////////////////////');
console.log(s.pop());

console.log('////////////////////////');
console.log('Stack after pop');
console.log('////////////////////////');
console.log(s);

console.log('////////////////////////');
console.log('Stack Peek');
console.log('////////////////////////');
console.log(peek(s));

console.log('////////////////////////');
console.log('Stack Display');
console.log('////////////////////////');
console.log(displayStack(s));

console.log('////////////////////////');
console.log('Stack Palindrome');
console.log('////////////////////////');
const s1 = new Stack();
console.log(isPalindrome('dad',s1));
console.log(isPalindrome('A man a plan a canal Panama', s1));
console.log(isPalindrome('1001',s1));
console.log(isPalindrome('10011',s1));