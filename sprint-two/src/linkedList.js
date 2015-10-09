var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var headPos = 0;
  var tailPos = 0;

  list.addToTail = function(value){
    //takes a value and adds it to the end of the list
    
    if(tailPos === 0){
      list.head = Node(value);
      list.tail = Node(value);
      tailPos++;
    } else {
      list.tail = Node(value);
      tailPos++;  
    }
    // if we add a new tail
    // old tail -> list.middle
    // every new value -> most current list.tail

  };

  list.removeHead = function(){
    //removes the first node from the list and returns its value
    //if removehead is invoked, list.tail = list.head
    // delete list.head;
    var headValue = list.head
    list.head = list.tail;
    headPos++;

    //list["keyname"] > value
    //list[var] > list["1"] > value of 1

    // list[something][var]
    return headValue.value;
  };

  list.contains = function(target){
    //returns boolean reflecting whether or not the passedin value is in the linked list.
    var found = false;
    _.each(list, function(eachObj){
      if(eachObj.value === target){
        found = true;
      }
    })

    return found;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
    Brian: Linear
 */
/* idea
list = {
  head: {
    value: 4,
    next: null
  },
  tail: {
    value: 5,
    next: null
  }
}

list = {
  tail: {
    value: 5,
    next: null
  }
}

list = {
  head : null,
  tail : null,
  headCounter : number,
  tailCoiunter : number,
  1(headPos) :  Node(1) // {value, 2}
  2 : Node(2) //{value, 3}
  3(tailPos) : Node(3) // {value, null}
}*/





