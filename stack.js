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
    console.log('Empty list');
    return null;
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
//   const lowerCaseStr = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//   for(let i = 0 ; i< lowerCaseStr.length; i++){
//     const char = lowerCaseStr.charAt(i);
//     stack.push(char);
//   }

//   while(stack.top !== null){
//     reverseStr += stack.pop();
//   }

//   if(reverseStr === lowerCaseStr){
//     return true;
//   }
//   return false;
// }

function isPalindrome(string, stack){
  const lowerCaseStr = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
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

function isParenBalanced(string, stack){
  for(let i = 0 ; i < string.length; i++){
    const char = string.charAt(i);
    if(char === '(' || char === '[' || char === '{'){
      stack.push({char, index:i});
    }
    else{
      const topOfStack = peek(stack);
      if(topOfStack !== null){
        if(topOfStack.char === '('){
          if(char === ')'){
            stack.pop();
          }
          else if (char === ']' || char === '}'){
            throw new Error(`At index ${i}, Expected: ) Found: ${char}`);
          }
          else{
            throw new Error(`At index ${topOfStack.index}, there are no closing parenthesis for ${topOfStack.char}`);
          }
        }
        else if(topOfStack.char === '['){
          if(char === ']'){
            stack.pop();
          }
          else if (char === ')' || char === '}'){
            throw new Error(`At index ${i}, Expected: ] Found: ${char}`);
          }
          else{
            throw new Error(`At index ${topOfStack.index}, there are no closing brackets for ${topOfStack.char}`);
          }
        }
        else if(topOfStack.char === '{'){
          if(char === '}'){
            stack.pop();
          }
          else if (char === ')' || char === ']'){
            throw new Error(`At index ${i}, Expected: } Found: ${char}`);
          }
          else{
            throw new Error(`At index ${topOfStack.index}, there are no closing curly brackets for ${topOfStack.char}`);
          }
        }
      }
      else{
        throw new Error(`At index ${i}, there are no open parenthesis for ${char}`);
      }
    }
  }
  return true;
}

function sortStack(needSortStack){
  const tempStack = new Stack();
  let temp;
  //let stackSortPointer = needSortStack.first;
  while(needSortStack.first !== null){
    if(!peek(tempStack)){
      
    }
  }
}

function queueWithTwoStack(inStack, outStack){
  for(let i = 0; i< 10; i++){
    inStack.push(i);
  }
  let inStackPointer = inStack.top;
  while(inStackPointer !== null){
    outStack.push(inStackPointer.data);
    inStackPointer = inStackPointer.next;
  }
  return outStack;
}
///////////////////////////////////////////Testing ////////////////////////////////////
// console.log('////////////////////////');
// console.log('Stack');
// console.log('////////////////////////');
// const s = new Stack();
// s.push(1);
// s.push(2);
// s.push(3);
// console.log('////////////////////////');
// console.log('Stack Pop');
// console.log('////////////////////////');
// console.log(s.pop());

// console.log('////////////////////////');
// console.log('Stack after pop');
// console.log('////////////////////////');
// console.log(s);

// console.log('////////////////////////');
// console.log('Stack Peek');
// console.log('////////////////////////');
// console.log(peek(s));

// console.log('////////////////////////');
// console.log('Stack Display');
// console.log('////////////////////////');
// console.log(displayStack(s));

// console.log('////////////////////////');
// console.log('Stack Palindrome');
// console.log('////////////////////////');
// const s1 = new Stack();
// console.log(isPalindrome('dad',s1));
// console.log(isPalindrome('A man a plan a canal Panama', s1));
// console.log(isPalindrome('1001',s1));
// console.log(isPalindrome('10011',s1));

// console.log('////////////////////////');
// console.log('Stack Paren');
// console.log('////////////////////////');
// const s2 = new Stack();
// console.log(isParenBalanced('(())', s2));
// console.log(isParenBalanced('{([({})])}', s2));

console.log('////////////////////////');
console.log('Stack Queue');
console.log('////////////////////////');
const s3 = new Stack();
const s4 = new Stack();
console.log(queueWithTwoStack(s3, s4));

console.log('////////////////////////');
console.log('Stack Sort');
console.log('////////////////////////');
const s5 = new Stack();
s5.push(3);
s5.push(1);
s5.push(2);
s5.push(4);
