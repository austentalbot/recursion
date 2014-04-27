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
getElements=function(level) {
	children=level.childNodes;
	for (i=0; i<childNodes.length; i++) {
		if (className in childNodes[i].classList) {
			elements.push(childNodes[i]);
		}
		getElements(childNodes[i]);
	}
};

return elements;

};
