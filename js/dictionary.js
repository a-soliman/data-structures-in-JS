function Dictionary() {
  this.items = {};
}

// set method to work as an insert
Dictionary.prototype.set = function(key, value) {
  this.items[key] = value;
};
