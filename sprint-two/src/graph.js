

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.storage = {};
  this.links = {};

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.storage[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var found = false;
  _.each(this.storage, function(val){
    if(val === node) {
      found = true;
    }
  });  

  return found;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  // if(this.links[fromNode] === toNode) {
  if(this.links[fromNode] === toNode || this.links[toNode] === fromNode){
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  //add two key/value pairs
  //first : key/value from the fromNode
  //second : key/value from toNode
  this.links[fromNode] = toNode;
  // this.links[toNode] = fromNode; // Huh?
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.links[fromNode];
  delete this.links[toNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, function(el, key){
    console.log(el);
    cb(el);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



