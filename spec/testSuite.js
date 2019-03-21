(function(exports) {

var assert = {

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isEqual: function(assertionToCheck, expectedValue){
    if (assertionToCheck !== expectedValue) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not equal to " + expectedValue)
    }
  },

   includedInArray: function(arrayToCheck, value) {
     if (!arrayToCheck.includes(value)) {
       throw new Error("Assertion failed: " + value + " is not included in" + arrayToCheck)
     }
   }
};

var it = function(nameString, callback){
  try {
    callback()
    var text = "PASS: " + nameString
     addtext(text, "passColour")
  } catch(error) {

    text = "FAIL: " + nameString + error.stack
    addtext(text, "failColour")
  }

  };

var describe = function(nameString, callback){
  callback()
}

var addtext = function(text, passing){
  var text = document.createTextNode(text)
  var div = document.createElement("div")
  div.setAttribute("class", passing)
  div.append(text)
  document.getElementById("test").append(div)
  document.getElementById("test").append(document.createElement("br"))
}
exports.assert = assert
exports.it = it
exports.describe = describe

})(this);
