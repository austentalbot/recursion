// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  //loop over all nodes at one level
  //test to see if class name in node
  //recursively loop over all child nodes

  var results=[];

  var node= arguments[1] || document.body;

  var hasClass = function(node , className) {
    if (node.classList && node.classList.contains(className)) {
      return true;
    }
    return false;
  };

  //check if node has class
  if (hasClass(node, className)) {
    //  if so add to results
    results.push(node);
  }
  //iterate through children
  for (var i=0; i<node.childNodes.length; i++) {
  //  call recursively and join results of recursive function to results
    results = results.concat(getElementsByClassName(className, node.childNodes[i]));
  }


  return results;
};

