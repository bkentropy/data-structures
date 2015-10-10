var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.counter = 0;

  // your code here
  newTree.children = [];  // function() {};ix me

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  // newTree.children.addChild = treeMethods.addChild;

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children[this.counter] = Tree(value);
  this.counter++;
};

treeMethods.contains = function(target){
  var found = false;

  _.each(this.children, function(child) {
    if ( child.value === target ) {
      found = true;
    }
    // if( child.children ){
    //    child.contains(target);
    //  }
  }); 

  return found;

};




/*
 * Complexity: What is the time complexity of the above functions?
 */


