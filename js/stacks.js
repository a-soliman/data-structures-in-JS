// //constrctor function
// function stack() {
//   this.items = [];
// }

// //push method
// stack.prototype.push = function(element) {
//   this.items.push(element);
// };

// //pop method
// stack.prototype.pop = function() {
//   return this.items.pop();
// };

// //peek method
// stack.prototype.peek = function() {
//   var index = this.items.length -1;
//   return this.items[index];
// };

// //empty method
// stack.prototype.empty = function() {
//   return this.items.length === 0;
// };

// //size method
// stack.prototype.size = function() {
//   return this.items.length;
// };

// //clrar method
// stack.prototype.clear = function() {
//   this.items = [];
// };

// //print method
// stack.prototype.print = function() {
//   console.log(this.items.toString());
// };

//==================================================================================
function Stack() {
  var items = [];
  this.push = function(element) {
    items.push(element);
  };

  this.pop = function() {
    items.pop();
  };

  this.isEmpty = function() {
    return items === 0;
  };

  this.size = function() {
    return items.length;
  };

  this.clear = function() {
    items = [];
  };

  this.print = function() {
    return items.toString()
  }
}


//=== TESTING ===//
var myStack = new Stack();
myStack.push(10);
myStack.push(5);
myStack.push(7);
// console.log(myStack);
// console.log('Peek : ', myStack.peek())
console.log('Is Empty :', myStack.isEmpty())
console.log('Size : ', myStack.size())
myStack.print()
myStack.pop()
myStack.print()