var assert = {

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isEqual: function(assertionToCheck, expectedValue){
    if (assertionToCheck == expectedValue) {
      console.log(`PASS - ${expectedValue} is equal to ${assertionToCheck}.`)
    } else {
      console.log((`FAIL - ${expectedValue} is NOT equal to ${assertionToCheck}.`))
    }
  },

   includedInArray: function(arrayToCheck, value) {
     if (arrayToCheck.includes(value)) {
     console.log(`PASS - ${value} is inside ${arrayToCheck}`)
   } else {
     console.log(`FAIL - ${value} is not present in ${arrayToCheck}.`)
   }

   }
};

var it = function(nameString, functionToPass){
  yourTest = functionToPass;
  return yourTest;
};
