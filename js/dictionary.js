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

// has metod to check if a specific value does exist
Dictionary.prototype.has = function(key) {
  return key in this.items;
};
