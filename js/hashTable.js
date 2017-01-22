//constructor funcs
function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

//Nodes function
function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// hash method => hashes a letter into Number
HashTable.prototype.hash = function(key) {
  var total = 0;
  for(var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  
  return bucket;
}
