// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // recursively call stringifyJSON to pull each element out
  // handle different types (obj, array, string, number) separately first, then call stringifyJSON recursively

  // populate empty variables
  var strung='';
  var i;

  //ARRAY
  if (Array.isArray(obj)) {
  	strung='[';
  	for (i=0; i<obj.length; i++) {
  		strung+=stringifyJSON(obj[i]);
  		i<obj.length-1 ? strung+=', ' : strung+=']';
  	}
  };

  //STRING
  if (typeof obj === 'string') {
  	strung='"';
  	strung+=obj;
  	strung+='"'
  }

  //NUMBER AND BOOLEAN
  if (typeof obj === 'number' | typeof obj === 'boolean') {
  	strung+=obj;
  }

  //OBJECT
  if (typeof obj === 'object') {
  	
  }

  return strung;

};
