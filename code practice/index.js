"use strict";

function closures() {
    let newVar = 10;
    function innerFunction() {
        console.log("Testing here", newVar);
    }
    return innerFunction;
}
closures()();

const newArray =  [1, 2, 3];
Array.prototype.last = function() {
    const lastIndex = this.length - 1;
    return this[lastIndex];
};

console.log(newArray.last());

/******************************** */

var createCounter = function(n) {
    let booleanCheck = false;
    return function() {
        if(!booleanCheck) {
            booleanCheck = true;
            return n;
        }
        return ++n;
    };
};


const counter = createCounter(-3)
console.log(counter()); // 10
console.log(counter());
console.log(counter());

/*********************************** */

async function sleep(millis) {

    return new Promise((resolve) => {
        setTimeout(() => resolve(), millis);
    });
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100



// ***************************//

function getArea(grid) {

    let lengthStart;
    let lengthEnd;
    let heightStart;
    let heightEnd;

    for(let i = 0; i < grid.length; i++) {
        const newArray = grid[i];
        const firstOne = newArray.findIndex((item) => item === 1);
        const lastOne = newArray.lastIndexOf(1);
        if(newArray.includes(1)) {
            if(lengthStart === undefined || firstOne < lengthStart) {
                lengthStart = firstOne;
            }
             if(heightStart === undefined || i < heightStart) {
                heightStart = i;
            }
            if (lengthEnd === undefined || lastOne > lengthEnd) {
                lengthEnd = lastOne;
            }
            if(heightEnd === undefined || i > heightEnd) {
                heightEnd = i;
            }
        }
    }
    const length = (lengthEnd - lengthStart) + 1; 
    const height = (heightEnd - heightStart) + 1;
    return length * height;
}

console.log(getArea([[0,0,0],[0,0,0],[0,0,1],[0,1,0]]));




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
    return x*x;
}

const memoized = outerFunction(calculator)

console.log(memoized(10));
console.log(memoized(10));
console.log(memoized(5));
console.log(memoized(10));


//////////////


async function newFunction() {
    return "just a string";
}

const someValue = newFunction();
console.log(someValue);
someValue.then((res) => console.log(res));



////////////////////////// this keyword ///////////////////////////////

console.log(this); // window object 
function someFunction(){
    console.log(this);
    // depends on strict mode, 
    // if "use strict" -> undefined, else global window onject, 
    // due to the concept called "this substitution".
}
someFunction();

const newArrowFunction = () => {
    console.log(this);
}

newArrowFunction();

const newObj1 = {
    "a": "This is a string1",
    "newFunction" : function() {
        const newAgain = () => { // arrow function inside a function, enclosed lexical context i.e., the outer function
            console.log(this);
        }
        newAgain();
    }
}

const newObj2 = {
    "a": "This is a string2",
    "newFunction" : () => {
            console.log(this); // enclosed lexical context, i.e., the global window
        }
}

const newObj3 = {
    "a": "This is a string3",
    "newFunction" : function() {
            console.log(this); // refers to the object.
        }
}

newObj1.newFunction();
newObj2.newFunction();
newObj3.newFunction();

const someOtherOBJ = {
    "first": "string value",
    "second": this
}

console.log("Check the value of this in an object", someOtherOBJ);


//////////////////////////////////////////////// timed Cache //////////////////////////


var TimeLimitedCache = function() {

    this.cacheObj = {};
    this.timers = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
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
TimeLimitedCache.prototype.get = function(key) {
    return this.cacheObj[key] ? this.cacheObj[key] : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
   return (Object.keys(this.cacheObj)).length;
};






////////////////////////////


function memoize(fn) {
    
    let calculatedValue = {};
    let argsArray = [];
    return function(...args) {
        if(calculatedValue.hasOwnProperty(args)) {
            return calculatedValue[args];
        }

        for (let i=0; i < args.length; i++) {
            argsArray.push(args[i]);
        }
        if (args.length !==0 ) {
            calculatedValue[args] = fn(...args);
            return calculatedValue[args];
        }
    }
}
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(0,0) // 5
memoizedFn(0,0) // 5
console.log(callCount) // 1 


//////////////////

function toFindDuplicates(inputArr) {
    let resArr = [];
    for (let i = 0; i< inputArr.length; i++){
        const newArray = inputArr.slice(i+1);
        if (newArray.includes(inputArr[i]) && !resArr.includes(inputArr[i])){
            resArr.push(inputArr[i]);
        }
    }
    return resArr;
}

function toFindDuplicatesUsingOtherWay(inputArr) {
    let duplicates = [];
    let uniques =[];
    for (const item of inputArr){ 
        // for-in iterates through indexes- use for objects (to find/use against keys)
        // for-of iterates through values- use for arrays(to find/use against values)
        if(uniques.includes(item)) {
            duplicates.push(item);
        } else {
            uniques.push(item);
        }
    }
    return duplicates;
}

console.log(toFindDuplicates([1,2,3,4,5,1,4,5]));
console.log(toFindDuplicatesUsingOtherWay([1,2,3,4,5,1,4,5]));

////////////////////////////////////////
///// Find two integers such that the paramValue = integer1 + integer2

function findTwoIntegers(paramValue) {
    let foundSmallValue = false;
    let randomInteger;

    while(!foundSmallValue){
        randomInteger = Math.floor(Math.random() * paramValue) + 1;
        if (randomInteger < paramValue) {
            foundSmallValue = true;
        }
    }
    return [randomInteger, paramValue-randomInteger];
}
console.log(findTwoIntegers(199));
/////////////////////////////////////////////////////////

// Function Composition //

var compose = function(functionsArray) {

    let calculatedValue;
    return function (x) {
        calculatedValue = x;
        for(let i = ((functionsArray.length) -1); i >= 0; i--) {
            calculatedValue = functionsArray[i](calculatedValue);
        }
        return calculatedValue;
    }
};
const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4));


/////////////////// filter without using array.filter() built in method.

var filter = function(arr, fn) {
    let returnArray = [];
    for (let i=0; i< arr.length; i++) {
        if (fn(arr[i], i)) {
            returnArray.push(arr[i]);
        }
    }

    return returnArray;
};

const fuuuun = function firstIndex(n, i) { return i === 0; }
console.log(filter([1,2,3], fuuuun));