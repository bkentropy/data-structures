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
  //define a function
  _.each(this.children, function(child) {
    if ( child.value === target ) {
      found = true;
    }

    if( child.children ){
      // _.each(child.children, function(child){
        if ( child.contains(target) ) {
          found = true; // Why do we need this? why is not line 31 not sufficient?
        };
      // })
     }
  }); 

  return found;

};




/*
 * Complexity: What is the time complexity of the above functions?
 */


