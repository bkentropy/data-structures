var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  var result = false;

  _.each(this, function(element) {
    console.log("element[item] : "+element[item]);
    if ( element[item] ) {
      result = true;
    }
  })

  return result;

};

setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// set = {
  // _storage = undefined;
// }