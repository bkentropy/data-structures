var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    if( list.head && list.tail ){
      list.tail.next = Node(value);
      list.tail = Node(value);
    } else if ( !(list.head) ){
      list.tail = Node(value);
      list.head = list.tail;
    }
  };

  list.removeHead = function(){
    //removes the first node from the list and returns its value
    //if removehead is invoked, list.tail = list.head
    // delete list.head;
    var headValue = list.head;
    var nextHeadValue = list.head.next;
    delete list.head;
    // headPos++;
    list.head = nextHeadValue;
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

var Node = function(value, next){
  var node = {};

  node.value = value;
  node.next = next || null;
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





