// String
String.prototype.quote = function() {
  return '"' + this + '"';
};
String.prototype.title = function() {
  return this.replace(/\w\S*/g, function(regstr) {
    return regstr.charAt(0).toUpperCase() + regstr.substr(1).toLowerCase();
  });
};
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.substr(1).toLowerCase();
};

// Object
Object.prototype.isEmpty = function() {
  var objType = Object.prototype.toString.call(this);
  if(objType === "[object Object]")
    return (Object.keys(this).length === 0);
  else
    throw new TypeError("The provided value is not an Object (Dictionary)");
};
Object.prototype.get = function(key, value) {
  var objType = Object.prototype.toString.call(this);
  if(objType !== "[object Object]") throw new TypeError("The provided value is not an Object (Dictionary)");
  if(key === undefined) throw new Error("Please provide a valid String as a key for the get() function");
  if(value === undefined) value = null;

  for(var k in this) if(k == key) return this[key];

  this[key] = value;
  return this[key];
};

// Array
Array.prototype.max = function() {
  // Thanks to John Resig http://ejohn.org/blog/fast-javascript-maxmin/
  return Math.max.apply(Math, this);
};
Array.prototype.min = function() {
  // Thanks to John Resig http://ejohn.org/blog/fast-javascript-maxmin/rr
  return Math.min.apply(Math, this);
};
Array.prototype.exclude = function(searchElement, fromIndex) {
  // inspired by the ES6/ES7 `includes`
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  if(fromIndex === undefined || fromIndex < 0) fromIndex = 0;
  if(this.indexOf(searchElement) > -1) {
    for(var i = fromIndex, len = this.length; i < len; i++) {
      if(this[i] == searchElement) {
        this.splice(i, 1);
        i -= 1;
        len = this.length;
      }
    }
  }
  return this;
};
Array.prototype.isEmpty = function() {
  return (this.length === 0);
};
Array.prototype.clear = function() {
  // this will delete the original array and all the references
  for(var i = this.length; i > 0; i--) this.pop();
};

// Function
Function.prototype.delay = function(ms) {
  // inspired by jQuery https://api.jquery.com/delay/
  if(ms === undefined || ms < 0) ms = 1;
  var that = this;
  setTimeout(function() {
    that();
  }, ms);
};

// Date
