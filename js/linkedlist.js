// linked list constructor function
function LinkedList() {
	this.head = null;
	this.tail = null;
}

// Node constructor function
function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}