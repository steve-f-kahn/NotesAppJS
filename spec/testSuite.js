var assert = {

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isEqual: function(assertionToCheck, expectedValue){
    if (assertionToCheck == expectedValue) {
      console.log(`${expectedValue} is equal to ${assertionToCheck}. Congratulations.`)
    } else {
      console.log((`${expectedValue} is NOT equal to ${assertionToCheck}. Comiserations :-(.`))
    }
  }


};
