// === queue ===


function Queue() {
  this.items = [];
}

Queue.prototype.enqueue = function(element) {
  this.items.push(element);
};
