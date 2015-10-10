var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tuple = {}; // Note: is this cool? okay? 
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(i === 0) {
     this._tuple[k] = v;
  }
  this._storage[i] = [k,v]; // <- this is the tuple/bucket
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._tuple[k]){
    return this._tuple[k];
  }
  return this._storage[i][1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i][1] = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
