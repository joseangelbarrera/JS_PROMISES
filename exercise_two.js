// new promise(executor(fulfill, reject) {... })
// or
// var promise = new(executor(fulfill, reject) {... })

//promise
// .then(onFullfill, onReject)

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('FULFILLED!')
    }, 300);
})

// const myFullfill = resolve

// the functions passed to then is the functions
// will be executed into then. Usually we pass an anonimous function.

promise
    .then(function(nuria) {
        console.log(nuria);
    })


// 1º
// setTimeout(function() {
//     resolve('FULFILLED!')
// }, 3000);


// official answer:

  // Create a promise
    
    // var promise = new Promise(function (fulfill, reject) {
    //   // After the timeout reaches 300ms, fulfill the promise with value
    //   // 'FULFILLED!'.
    
    //   setTimeout(function () {
    //     fulfill('FULFILLED!');
    //   }, 300);
    // });
    
    // // Add a handler to the promise’s fulfillment. `console.log` will be called
    // // with the value passed to `fulfill`, which is `'FULFILLED!'`.
    // // Note that this statement will ALWAYS be executed before `fulfill` is
    // // called (we'll talk about this in depth in the lessons to come).
    
    // promise.then(console.log);


