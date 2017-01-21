
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

// === SET OPERATIONS ===
  // 1) union,  2) Intersection,  3) Diffrence,  4) Subset.

// 1) Union 
Set.prototype.union = function(otherSet) {
  var unionSet = new Set();
  
  var values = this.values();
  for(var i =0; i <values.length; i++) {
    unionSet.add(values[i]);
  }
  
  values = otherSet.values();
  for(var i = 0; i<values.length; i++) {
    unionSet.add(values[i]);
  }
  return unionSet;
};

// 2) Intersection
Set.prototype.intersection = function(otherSet) {
  var intersectionSet = new Set();
  
  var values = this.values();
  for(var i =0; i < values.length; i++) {
    if(otherSet.has(values[i])) {
      intersectionSet.add(values[i]);
    }
  }
  return intersectionSet;
};

// 3) Diffrence
Set.prototype.diffrence = function(otherSet) {
  var diffrenceSet = new Set();
  
  var values = this.values();
  for(var i = 0; i < values.length; i++) {
    if(!otherSet.has(values[i])) {
      diffrenceSet.add(values[i]);
    }
  }
  return diffrenceSet;
};

// 4) Subset
Set.prototype.subset = function(otherSet) {
  if(this.size() > otherSet.size()) {
    return false;
  }
  else {
    var values = this.values();
    for(var i = 0; i < values.length; i++) {
      if(!otherSet.has(values[i])) {
        return false;
      }
    }
    return true;
  }
};


// === TESTING ===
// var set = new Set();

// set.add(1);
// set.add(2);
// set.add(10);

// // set.delete(1);

// set.has(2);

// console.log('size : ',set.size())

// console.log('Values : ' ,set.values());
// console.log('set : ' ,set.items);


var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB =new Set();
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

var unionAB = setA.union(setB);
console.log('Union SET : ', unionAB.values());
