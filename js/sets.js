
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
