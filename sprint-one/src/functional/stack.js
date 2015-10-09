var Stack = function(){

  var someInstance = {};
  var key = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    key += 1;
    storage[key] = value;
  };

  someInstance.pop = function(){
    var poppedValue = storage[key];

    if(key > 0){
       delete storage[key];
       key -= 1;
    }

    return poppedValue;

  };

  someInstance.size = function(){
    return key;
  };

  return someInstance;

};

