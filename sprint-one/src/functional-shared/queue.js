var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.counter = 0;
  someInstance.storage = {};

  someInstance.dequePos = 0;

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;

};

var queueMethods = {};

queueMethods.size = function() {
  return (this.counter - this.dequePos);
};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  if(this.dequePos < this.counter){
    var savedValue = this.storage[this.dequePos];
    this.dequePos++;
    return savedValue;
  } else {
    return 0;
  }
};
