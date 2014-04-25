// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // recursively call stringifyJSON to pull each element out
  // handle different types (obj, array, string, number) separately first, then call stringifyJSON recursively

  // populate empty variables
  var strung='';
  var i;

  if (Array.isArray(obj)) { //ARRAY
  	strung='[';
  	for (i=0; i<obj.length; i++) {
  		strung+=stringifyJSON(obj[i]);
  		i<obj.length-1 ? strung+=',' : strung+=']';
  	}
  	// case for empty array
  	obj.length===0 ? strung+=']' : null;
  } else if (typeof obj === 'string') { //STRING
  	strung='"';
  	strung+=obj;
  	strung+='"'
  } else if (typeof obj === 'number' | typeof obj === 'boolean' | obj === null) { //NUMBER AND BOOLEAN AND NULL
  	strung+=obj;
  } else if (typeof obj === 'object') { //OBJECT
  	strung='{'
  	for (i in obj) {
  		strung+=stringifyJSON(i);
  		strung+=':'
  		strung+=stringifyJSON(obj[i]);
  		strung+=',';
  	}
  	strung=strung.slice(0, strung.length-1)+'}'
  	// handle empty object
  	if (!Object.getOwnPropertyNames(obj).length) {
  		strung='{}';
  	}

  }

  return strung;

};
