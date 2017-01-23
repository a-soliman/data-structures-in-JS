function Dictionary() {
  this.items = {};
}

// set method to work as an insert
Dictionary.prototype.set = function(key, value) {
  this.items[key] = value;
};

// delelte method
Dictionary.prototype.delete = function(key) {
  if(this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};
