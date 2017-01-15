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
