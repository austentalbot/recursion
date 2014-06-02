// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // recursively call stringifyJSON to pull each element out
  // handle different types (obj, array, string, number) separately first, then call stringifyJSON recursively
  var str = "";

  if (typeof(obj) === "object" && obj !== null) {
    // Handle Arrays, Strings, Numbers, Objects, null, undefined & function,
    if (Array.isArray(obj)) {
      if (obj.length !== 0) {
        str = "[";
        _.each(obj, function(value, index) {
          str +=  stringifyJSON(value) + ",";
        });
        str = str.slice(0,str.length - 1) + "]";
      }
      else {
        str='[]';
      }
    }
    else if (typeof(obj) === "object") {
      if (Object.keys(obj).length > 0) {
        str += "{";
        _.each(obj, function(value, index) {
          var test = stringifyJSON(value);
          if (test !== "") {
            str += '"' +index + '"' +':';
            str += test + ",";
          }
        });
        str = str.slice(0, str.length - 1) + "}";
        if (str === "}") {
          str = "{}";
        }
      }
      else {
        str = "{}";
      }

    }
    else {
      str = "";
    }
  }
  else if (typeof(obj) === "number" || typeof(obj) === "boolean") {
    console.log(obj, str);
    str += obj;
  }
  else if (typeof(obj) === "string") {
    str += '"' + obj + '"';
  }
  else if (obj === null) {
    str += "null";
  }

  return str;
};


// var obj = {"hello": [1,2,3,4,5,6]}
