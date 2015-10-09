var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  
  someInstance.counter = 0;
  someInstance.storage = {};
  someInstance.dequePos = 0;


  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.counter - this.dequePos;
};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  if(this.counter > this.dequePos){
    var value = this.storage[this.dequePos];
    this.dequePos++;
    return value;
  } else {
    return 0;
  }
};

