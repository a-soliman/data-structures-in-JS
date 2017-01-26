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


// values method => returns an array of the methods
Dictionary.prototype.values = function() {
  var allValues = [];
  for(var key in this.items) {
    if(this.items.hasOwnProperty(key)) {
      allValues.push(this.items[key]);
    }
  }
  return allValues;
};


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // === TESTING ===

// var dictionary = new Dictionary();

// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('John', 'john@gmail.com');
// dictionary.set('Tyrion', 'tyrion@email.com');

// console.log('has() : ', dictionary.has('Gandalf'));
// console.log('Size : ', dictionary.size());


// console.log('Keys : ', dictionary.keys());
// console.log('values :', dictionary.values());
// console.log('get() : ', dictionary.get('Tyrion'));

// dictionary.delete('John');

// console.log('Size : ', dictionary.size());


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


      //Hash Tables
//constructor       
function HashTable() {
  this.table =[];
}


// == valuePair constructor ==
HashTable.prototype.valuePair = function(key, value) {
  this.key = key;
  this.value = value;
  this.toString = function() {
    return '[' + this.key + ' - ' + this.value + ']';
  }
};

// == Hash methood ==
HashTable.prototype.loseloseHashCode = function(key) {
  var hash = 0;
  
  for(var i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % 37;
};


// == put method ==
HashTable.prototype.put = function(key, value) {
  var position = this.loseloseHashCode(key);
  
  if(this.table[position] === undefined) {
    this.table[position] = new this.valuePair(key, value);
  }
  else {
    var index = ++position;
    while(this.table[index] != undefined) {
      index++;
    }
    this.table[index] = new this.valuePair(key, value);
  }
};


// == get method == 
HashTable.prototype.get = function(key) {
  var position = this.loseloseHashCode(key);
  if(this.table[position] !== undefined) {
    var current = this.table[position]
    
    while(current.next) {
      if(current.element.key === key) {
        return current.element.value;
      }
      current = current.next;
    }
    //check incase first or last element
    if(current.key === key) {
      return current.value;
    }
  }
  return undefined;
};
