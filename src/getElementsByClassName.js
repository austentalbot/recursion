// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  //loop over all nodes at one level
  //test to see if class name in node
  //recursively loop over all child nodes

  var elements=[];

  //create function to be recursively called on children
	var getElements = function (level) {
		//check if class in level
    if (level.classList) {
      if (level.classList.contains(className)) {
        elements.push(level);
      }
    }
    //recurse over children
    if (level.hasChildNodes) {
      for (var i =0; i < level.childNodes.length; i++) {
        getElements(level.childNodes[i]);
      }
    }
	};

	// call getElements function to start recursion
	getElements(document.body);

	return elements;

};

