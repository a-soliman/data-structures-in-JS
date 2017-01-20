
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

//clear method
Set.prototype.clear = function() {
  this.items = {};
};

//size method
Set.prototype.size = function() {
  var count = 0;
  
  for(var key in this.items) {
    if(this.items.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
};

//values method to return an Array containing all the values
Set.prototype.values = function() {
  var valuesArray =[];
  
  for(var value in this.items) {
    if(this.items.hasOwnProperty(value)) {
      valuesArray.push(this.items[value]);
    }
  }
  return valuesArray;
};
