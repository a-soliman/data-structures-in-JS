
function Set() {
  this.items = {};
}

// add method to add 
Set.prototype.add = function(value) {
  if(!this.has(value)) {
    this.items[value] = value;
    return true;
  }
  return false;
};

//delete method 
Set.prototype.delete = function(value) {
  if(this.has(value)) {
    delete this.items[value];
    return true;
  }
  return false;
};

//has(value) method to check if the set containes a value
Set.prototype.has = function(value) {
  return this.items.hasOwnProperty(value);
};
