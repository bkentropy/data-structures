var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.enqueuePos = 0;
  this.dequeuePos = 0;
  this.storage = {};

};

Queue.prototype.size = function() {
  return this.enqueuePos - this.dequeuePos;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.enqueuePos] = value;
  this.enqueuePos++;
};

Queue.prototype.dequeue = function() {
  if ( this.enqueuePos > this.dequeuePos) {
    var tempVar = this.storage[this.dequeuePos]
    this.dequeuePos++;
    return tempVar;
  } else {
    return 0;
  }
  
};

