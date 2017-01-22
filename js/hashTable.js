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
