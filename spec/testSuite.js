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
  },

   includedInArray: function(arrayToCheck, value) {
     if (arrayToCheck.includes(value)) {
     console.log(`Yes, ${value} is inside ${arrayToCheck}`)
   } else {
     console.log(`No, ${value} is not present in ${arrayToCheck}. This is a fail.`)
   }

   }
};
