var Queue = function(){
  var someInstance = {};
  var enQuePos = 0;
  var deQuePos = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    
    storage[enQuePos] = value;
    enQuePos += 1;
  };

  someInstance.dequeue = function(){
    
    var savedValue = storage[deQuePos];

    if (enQuePos > deQuePos) {
      delete storage[deQuePos];
      // enQuePos -= 1;
    }

    deQuePos += 1;

    return savedValue; 

  };

  someInstance.size = function(){
    if ( enQuePos > deQuePos) {
      return enQuePos - deQuePos;
    } else {
      return 0;
    }
    
  };

  return someInstance;
};

