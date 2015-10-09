var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};

  someInstance.size = stackMethods.size;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;

  return someInstance;

};

var stackMethods = {};

stackMethods.size = function() {
  return this.counter;
};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  if(this.counter > 0){
    this.counter--;
    return this.storage[this.counter];
  } else {
    return 0;
  }
};




