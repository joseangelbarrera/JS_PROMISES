// ## Task number 7

// Call first function in your program. first() will return a promise that
// will be fulfilled with a secret value.

// Call second with the fulfilled value of first. Return the promise returned
// by second in your onFulfilled callback.

// Finally, print the fulfilled value of that new promise with console.log.


var first = new Promise(function(fulfill) {
    fulfill("secret value");
})

var onFulfilled = function(message) {
    return message
}

first
    .then(onFulfilled)
    .then(function(results) {
        console.log(results)
    })

// ==> secret value

// After verification it shows this issue and I can`t pass the exercise.
// ✗ Expected execution time: 498±100ms. Submission execution time: 96ms.
