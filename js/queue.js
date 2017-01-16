// === queue ===


function Queue() {
  this.items = [];
}

Queue.prototype.enqueue = function(element) {
  this.items.push(element);
};

Queue.prototype.dequeue = function() {
  var val = this.items[0];
  this.items.shift();
  return val;
};

Queue.prototype.front = function() {
  var val = this.items[0];
  return val;
};


Queue.prototype.isEmpty = function() {
  return this.items === 0;
};


Queue.prototype.size = function() {
  return this.items.length;
};


Queue.prototype.print = function() {
  return this.items.toString();
}

//==== TESTING ===

var queue = new Queue();
queue.enqueue('ahmed');
queue.enqueue('Lilit');
queue.enqueue('Leyla');

