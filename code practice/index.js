"use strict";

function closures() {
  let newVar = 10;
  function innerFunction() {
    console.log("Testing here", newVar);
  }
  return innerFunction;
}
closures()();

const newArray = [1, 2, 3];
Array.prototype.last = function () {
  const lastIndex = this.length - 1;
  return this[lastIndex];
};

console.log(newArray.last());

/////////////////////////////////////

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet(); // "Hello, my name is John"

///// “No — classes in JavaScript are syntactic sugar over its prototype-based inheritance model.
//  Underneath, everything still works using prototypes.”

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const jane = new Person("Jane");
jane.greet(); // "Hello, my name is Jane"

////////////////////////////////////

/******************************** */

var createCounter = function (n) {
  let booleanCheck = false;
  return function () {
    if (!booleanCheck) {
      booleanCheck = true;
      return n;
    }
    return ++n;
  };
};

const counter = createCounter(-3);
console.log(counter());
console.log(counter());
console.log(counter());

/*********************************** */
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), millis);
  });
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100

// ***************************//

function getArea(grid) {
  let lengthStart;
  let lengthEnd;
  let heightStart;
  let heightEnd;

  for (let i = 0; i < grid.length; i++) {
    const newArray = grid[i];
    const firstOne = newArray.findIndex((item) => item === 1);
    const lastOne = newArray.lastIndexOf(1);
    if (newArray.includes(1)) {
      if (lengthStart === undefined || firstOne < lengthStart) {
        lengthStart = firstOne;
      }
      if (heightStart === undefined || i < heightStart) {
        heightStart = i;
      }
      if (lengthEnd === undefined || lastOne > lengthEnd) {
        lengthEnd = lastOne;
      }
      if (heightEnd === undefined || i > heightEnd) {
        heightEnd = i;
      }
    }
  }
  const length = lengthEnd - lengthStart + 1;
  const height = heightEnd - heightStart + 1;
  return length * height;
}

console.log(
  getArea([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
);

//////////////////////

function outerFunction(callback) {
  let firstValue;
  let calculatedValue;

  function innerFunction(firstPassedValue) {
    if (firstPassedValue === firstValue) {
      return calculatedValue;
    }
    firstValue = firstPassedValue;
    calculatedValue = callback(firstPassedValue);

    return calculatedValue;
  }

  return innerFunction;
}

function calculator(x) {
  return x * x;
}

const memoized = outerFunction(calculator);

console.log(memoized(10));
console.log(memoized(10));
console.log(memoized(5));
console.log(memoized(10));

///////////////////////   async function always returns a promise  //////////////////////////////////////////

async function newFunction() {
  return "just a string";
}

const someValue = newFunction();
console.log(someValue);
someValue.then((res) => console.log(res));

////////////////////////// this keyword ///////////////////////////////

console.log(this); // window object
function someFunction() {
  console.log(this);
  // depends on strict mode,
  // if "use strict" -> undefined, else global window object,
  // due to the concept called "this substitution".
}
someFunction();

const newArrowFunction = () => {
  console.log(this); // Arrow functions always take the scope of their lexical parent, i.e., thier outer scope.
};

newArrowFunction();

const newObj1 = {
  a: "This is a string1",
  newFunction: function () {
    const newAgain = () => {
      // arrow function inside a function, enclosed lexical context i.e., the outer function
      console.log(this);
    };
    newAgain();
  },
};

const newObj2 = {
  a: "This is a string2",
  newFunction: () => {
    console.log(this); // enclosed lexical context, i.e., the global window
  },
};

const newObj3 = {
  a: "This is a string3",
  newFunction: function () {
    console.log(this); // refers to the object.
  },
};

newObj1.newFunction();
newObj2.newFunction();
newObj3.newFunction();

const someOtherOBJ = {
  first: "string value",
  second: this,
};

console.log("Check the value of this in an object", someOtherOBJ);

//////////////////////////////////////////////// timed Cache //////////////////////////

var TimeLimitedCache = function () {
  this.cacheObj = {};
  this.timers = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let keyToUse = key;
  let boolValue = false;

  if (this.cacheObj[keyToUse]) {
    clearTimeout(this.timers[keyToUse]);
    boolValue = true;
  }
  this.timers[keyToUse] = setTimeout(() => {
    delete this.cacheObj[keyToUse];
  }, duration);
  this.cacheObj[keyToUse] = value;
  return boolValue;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.cacheObj[key] ? this.cacheObj[key] : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.cacheObj).length;
};

////////////////////////////

function memoize(fn) {
  let calculatedValue = {};
  let argsArray = [];
  return function (...args) {
    if (calculatedValue.hasOwnProperty(args)) {
      return calculatedValue[args];
    }

    for (let i = 0; i < args.length; i++) {
      argsArray.push(args[i]);
    }
    if (args.length !== 0) {
      calculatedValue[args] = fn(...args);
      return calculatedValue[args];
    }
  };
}
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(0, 0); // 5
memoizedFn(0, 0); // 5
console.log(callCount); // 1

//////////////////

function toFindDuplicates(inputArr) {
  let resArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    const newArray = inputArr.slice(i + 1);
    if (newArray.includes(inputArr[i]) && !resArr.includes(inputArr[i])) {
      resArr.push(inputArr[i]);
    }
  }
  return resArr;
}

function toFindDuplicatesUsingOtherWay(inputArr) {
  let duplicates = [];
  let uniques = [];
  for (const item of inputArr) {
    // for-in iterates through indexes - use for objects (to find/use against keys)
    // for-of iterates through values - use for arrays(to find/use against values)
    if (uniques.includes(item)) {
      duplicates.push(item);
    } else {
      uniques.push(item);
    }
  }
  return duplicates;
}

console.log(toFindDuplicates([1, 2, 3, 4, 5, 1, 4, 5]));
console.log(toFindDuplicatesUsingOtherWay([1, 2, 3, 4, 5, 1, 4, 5]));

////////////////////////////////////////
///// Find two integers such that the paramValue = integer1 + integer2

function findTwoIntegers(paramValue) {
  let foundSmallValue = false;
  let randomInteger;

  while (!foundSmallValue) {
    randomInteger = Math.floor(Math.random() * paramValue) + 1;
    if (randomInteger < paramValue) {
      foundSmallValue = true;
    }
  }
  return [randomInteger, paramValue - randomInteger];
}
console.log(findTwoIntegers(199));
/////////////////////////////////////////////////////////

// Function Composition //

var compose = function (functionsArray) {
  let calculatedValue;
  return function (x) {
    calculatedValue = x;
    for (let i = functionsArray.length - 1; i >= 0; i--) {
      calculatedValue = functionsArray[i](calculatedValue);
    }
    return calculatedValue;
  };
};
const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));

/////////////////// filter without using array.filter() built in method.

var filter = function (arr, fn) {
  let returnArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      returnArray.push(arr[i]);
    }
  }

  return returnArray;
};

const fuuuun = function firstIndex(n, i) {
  return i === 0;
};
console.log(filter([1, 2, 3], fuuuun));

/////////////////////////////////////////////////////////////////////////
//////////////////////// Onclick Handler attached to a Div,that changes the color to red,
//////// once all the div are red, the reverse order follows, changing all the div colors back to green.

let elementsArray = [];
function handleOnClick(blockId) {
  if (!elementsArray.includes(blockId)) {
    elementsArray.push(blockId);
  }
  const blockElement = document.getElementById(blockId);
  blockElement.style.backgroundColor = "red";

  if (elementsArray.length === 4) {
    const intervalId = setInterval(() => {
      const blockIDInside = elementsArray[elementsArray.length - 1];
      const blockElementinside = document.getElementById(blockIDInside);
      blockElementinside.style.backgroundColor = "aquamarine";
      elementsArray.pop();
      if (elementsArray.length === 0) {
        clearInterval(intervalId);
      }
    }, 500);
  }
}

////////////////////////////////////////////// DEBOUNCED FUNCTION /////////////////////////////////////////////////////////
// pass debouncedFunc as a callback to event handlers or anywhere you want to use a debounce function.
// The difference between each call should be greater than the delay, otherwise the function call wouldn't occur.

function generalFunction(...args) {
  console.log(
    "This is an expensive call, we just have mocked an expensive call."
  );
}

function debouncerFunction(callback, delay) {
  let timerId;
  return function () {
    const args = arguments;
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}

const debouncedFunc = debouncerFunction(generalFunction, 1000); // this is the debounced function to use.

////////////////////////////////////////////// THROTTLE FUNCTION /////////////////////////////////////////////////////////

// the delay is maintained, irrespective of the user input. The execution happens between specific intervals.

function throttlerFunction(callback, delay) {
  let checkFlag = true;
  return function () {
    const args = arguments;
    const context = this;

    if (checkFlag) {
      callback.apply(context, args);
      checkFlag = false;
      setTimeout(() => {
        checkFlag = true;
      }, delay);
    }
  };
}

const throttledFunction = throttlerFunction(generalFunction, 500); // this is the throttled function.

////////////////////////// currying in JS /////////////////////

/// breaking a function that takes multiple arguments into a multiple functions that take one argument at a time.
// example use cases  :
// 1. Function resuability
// 2. Avoid repeting arguments in config functions.

function curryingFunction(a) {
  return function insideCurryingFunction(b) {
    if (b !== undefined) {
      return curryingFunction(a + b);
    }
    return a;
  };
}

console.log(curryingFunction(2)(3)(4)(5)(6)());

//////////////////// Custom Hook Example ///////////////////////////////////////

// import { useState, useEffect } from 'react';

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!url) return;

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;

// // Usage in a react component//

// import React from 'react';
// import useFetch from './useFetch';

// const MyComponent = () => {
//   const { data, loading, error } = useFetch('https://api.example.com/data');

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       {data && data.map(item => <div key={item.id}>{item.name}</div>)}
//     </div>
//   );
// };

//////////// Custom Hook Example end ///////////////////

/////

// import React, { useRef, useEffect } from 'react';

// function AutoFocusInput() {
//   // 1. Create the ref
//   const inputRef = useRef(null);

//   useEffect(() => {
//     // 3. Access the DOM node in a lifecycle method
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);

//   return (
//     // 2. Attach the ref to a JSX element's `ref` attribute
//     <input ref={inputRef} type="text" />
//   );
// }
//////////////////////////////////////

var hasSameDigits = function (s) {
  let first = s;
  while (first.length > 2) {
    let newString = "";
    for (let i = 0; i < first.length - 1; i++) {
      newString += (Number(first[i]) + Number(first[i + 1])) % 10;
    }
    first = newString;
  }
  if (first.length == 2) {
    return first[0] == first[1];
  }
  return false;
};

console.log(hasSameDigits("3902"));

// find fibonacci sequence up to n numbers
function fibonacci(n) {
    let num1 = 0, num2 = 1, nextNum;

    console.log("Fibonacci Sequence:");

    for (let i = 1; i <= n; i++) {
        console.log(num1);
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
}

fibonacci(7);


////////////////
// Sum all "value" keys in nested objects and arrays
function sumValues(data) {
  let sum = 0;

  for (const item of data) {
    // If the object has a "value" key, add it
    if (typeof item.value === 'number') {
      sum += item.value;
    }

    // Check all other keys — if they are arrays or objects, recurse
    for (const key in item) {
      const val = item[key];
      if (Array.isArray(val)) {
        sum += sumValues(val);
      } else if (typeof val === 'object' && val !== null) {
        sum += sumValues([val]);
      }
    }
  }

  return sum;
}
///////////////////


// “We use Travis CI for our CI/CD pipeline. When a commit is made to master,
// Travis automatically builds a Docker image and pushes it to IBM Cloud Container Registry.
// It then deploys that image to our Dev environment, which runs on IBM Cloud Kubernetes Service.
// For QA and Prod, we promote the same image manually
// — we update the image tag in our YAML files and deploy to the
//  respective namespaces in the same IBM Cloud cluster.
//  This ensures controlled, traceable releases across environments.”

//What SonarQube checks

// Code Smells → Poor design or bad patterns (e.g., large functions, duplicate code)

// Bugs → Logical issues (e.g., unreachable code, null dereferences)

// Vulnerabilities → Security flaws (e.g., hardcoded passwords, unvalidated input)

// Coverage → Measures how much code is covered by unit tests

// Duplications → Identifies repeated code blocks across files

// Technical Debt → Quantifies how much “fix effort” your codebase needs