
# JS_PROMISES

This repository collet some exercises completed with [Nuria Escude](https://github.com/nuriaescude) from [nodeschool](https://github.com/stevekane/promise-it-wont-hurt) about ECMAScript 2015 prmosises


# Promises in javascript

You can expect that the functions passed to the `then method of a
promise will be called on the next turn of the event loop.

Promises allow you to return another promise in the `.then` function callbacks. This new promise you return in the promise will in turn be returned by `.then` so you can use it to do something after both of the actions are done.

### Shorcuts

**.catch**

So far we already know how to handle the rejection of a promise -- through the second parameter to `.then` function. 

In those cases yo to write

```
   promise.then(null, function (err) {
      console.error('THERE IS AN ERROR!!!');
      console.error(err.message);
   });
```

However, sometimes you only want to handle the rejection and not success. In these cases, since the `onFulfilled` callback is optional, you can specify `null` in place of it. 

However, a much easier way to achieve this is to use `.catch`. You could simply write:

```
   promise.catch(function (err) {
      console.error('THERE IS AN ERROR!!!');
      console.error(err.message);
    });
```


**Promise.resolve and Promise.reject.**
The code examples below will tell you exactly what they do.

***Promise.resolve***

We can create promise through the constructor:
    
```
    var promise = new Promise(function (fulfill, reject) {
      fulfill('SECRET VALUE');
    });
```


But the code below will do the exact same thing as above:
    
```
var promise = Promise.resolve('SECRET VALUE');
```

Likewise...

The lines below

```
var promise = new Promise(function (fulfill, reject) {
      reject(new Error('SECRET VALUE'));
    });
```

do the same thas this other ones:

```
var promise = Promise.reject(new Error('SECRET VALUE'));
```




