var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var counter = 0;
  this.children[counter] = { "value": value};
  counter++;
};

treeMethods.contains = function(target){
  var found = false;
  _.each(this.children, function(child) {
    if ( child.value === target ) {
      found = true;
    }
  });

  return found;

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
