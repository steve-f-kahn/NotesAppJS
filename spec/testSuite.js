(function(exports) {

var assert = {

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isEqual: function(assertionToCheck, expectedValue){
    if (assertionToCheck !== expectedValue) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not equal.")
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
  }catch(err){
    text = "FAIL: " + nameString + err + err.stack
    document.write()
  }

  };

var addtext = function(text, passing){
  var text = document.createTextNode(text)
  var div = document.createElement("div")
  div.setAttribute("class", passing)
  div.append(text)
  body.append(div)
  body.append(document.createElement("br"))
}
exports.assert = assert
exports.it = it


})(this);
