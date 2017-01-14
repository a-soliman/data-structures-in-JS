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