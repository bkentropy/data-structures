var BinarySearchTree = function(value){

  var tree = {};
  tree.value = value;

  tree.left = null;
  tree.right = null;

  // Tree has at most 2 children, but it does likely have children. (left, right)
  // tree.current;

  tree.insert = BSTreeMethods.insert;
  tree.contains = BSTreeMethods.contains;
  tree.depthFirstLog = BSTreeMethods.depthFirstLog;

  return tree;
};

var BSTreeMethods = {};

BSTreeMethods.insert = function(value, node) {
  var current = node || this;

  if ( current.value > value ) {
    if ( current.left === null ) {
      current.left = BinarySearchTree(value);
    } else {
      this.insert(value, current.left);
    }
  } else if ( current.value < value ) {
    if ( current.right === null ) {
      current.right = BinarySearchTree(value);
    } else {
      this.insert(value, current.right);
    }
  }
};


BSTreeMethods.contains = function(value, node) {
  var current = node || this;
  var found = found || false;
  //base case
  if(current.value === value){
    found = true;
  } else {
    if ( !(current.left === null) ) {
      if(current.left.value === value){
        found = true;
        
      } else {
        this.contains(value, current.left)
      }
    }

    if ( !(current.right === null) ) {
      if(current.right.value === value){
        found = true;
        
      } else {
        this.contains(value, current.right)
      }
    }

  }

    //two ifs > one for left and the other for right.
  return found;

};

BSTreeMethods.depthFirstLog = function(callback, node) {
  var current = node || this
  // base base
  // if current node.value is not empty
    // we want to execute callback on node.value
    // if current.left exists 
      // execute .depthFirstLog
    // if current.right exists
      // execute .depthFirstLog
  if ( current.value ) {
    callback(current.value);
  } 
  if ( current.left ) {
    this.depthFirstLog(callback, current.left);
  }
  if (current.right ) {
    this.depthFirstLog(callback, current.right);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
