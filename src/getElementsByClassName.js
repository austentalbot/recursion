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
  var root=document.body;
  var i;

  // create function to be recursively called on children
  var getElements=function(level) {
  	if (level.hasChildNodes) {
  	  children=level.childNodes;
	  for (i=0; i<children.length; i++) {
		if (children[i].classList & children[i].classList.contains(className)) {
		  elements.push(children[i]);
		}
		getElements(children[i]);
	  }
	}
  };

  getElements(root);
  return elements;

};
