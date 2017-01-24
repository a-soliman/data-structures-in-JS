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

// get method
Dictionary.prototype.get = function(key) {
  return this.has(key) ? this.items[key] : undefined;
};

// clear method 
Dictionary.prototype.clear = function() {
  this.items = {};
};

// size method
Dictionary.prototype.size = function() {
  var count = 0;
  for(var key in this.items) {
    if(this.items.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
};


// keys method => returns an array of the keys
Dictionary.prototype.keys = function() {
  return Object.keys(this.items);
};


