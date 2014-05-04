// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // recursively call stringifyJSON to pull each element out
  // handle different types (obj, array, string, number) separately first, then call stringifyJSON recursively

  // populate empty variables
  var strung='';

  if (Array.isArray(obj)) { //ARRAY
  	strung='[';
    _.each(obj, function(val, ind) {
  		strung+=stringifyJSON(val);
  		ind<obj.length-1 ? strung+=',' : strung+=']';
  	});
  	// case for empty array
  	obj.length===0 ? strung+=']' : null;
  } else if (typeof obj === 'string') { //STRING
  	strung='"';
  	strung+=obj;
  	strung+='"';
  } else if (typeof obj === 'number' | typeof obj === 'boolean' | obj === null) { //NUMBER AND BOOLEAN AND NULL
  	strung+=obj;
  } else if (typeof obj === 'object') { //OBJECT
  	strung='{';
    _.each(obj, function(val, ind) {
  		//HANDLE FUNCTIONS AND UNDEFINED
  		if (typeof val!== 'function' & typeof val!== 'undefined') {  		
        strung+=stringifyJSON(ind);
	  		strung+=':';
	  		strung+=stringifyJSON(val);
	  		strung+=',';
  		} else { //functions and undefined should return '{}'
  			strung='{ ';
  		}
  	});
  	strung=strung.slice(0, strung.length-1)+'}';
  	// handle empty object
  	if (!Object.getOwnPropertyNames(obj).length) {
  		strung='{}';
  	}

  } 

  return strung;

};
