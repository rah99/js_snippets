// Types of variables in JS - var (a global variable mainly replaced by the following two), let, const
// let = can reasign value
// const = a constant value - set once only

// // Data types in JS - String, numbers, boolean, null, undefined, symbol
// const name = 'Rob';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; // also undefined as no value

// // Check datas type - note null returns erroneously as object - https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined
// console.log(typeof name);

// // Concatenation
// console.log('My name is ' + name + ' and I am ' + age + ' years old');

// // ES6 template literals using !!!!!BACK TICKS!!!!!
// console.log(`My name is ${name} and I am ${age} years old`);

// // Alternatively could write as so
// const hello = `My name is ${name} and I am ${age} years old`;
// console.log(hello)

// // String properties = no parenteses and methods = parenteses
// const s = 'Hello World!';

// // Find length
// console.log(s.length);

// // Change case and substring
// console.log(s.toUpperCase());
// console.log(s.substring(0, 5).toUpperCase());

// // Put string into an array with further example on how to define with different const
// console.log(s.split(''));

// const s2 = 'technology, computers, IT, code';
// console.log(s2.split(', '));

// // Arrays - JS accepts multiple data types and does not need a defined array size
// // Long method
// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// // Shorter method as "[]" defines an array
// const fruits = ['apples', 'oranges', 'pears', 10, true]; // Example of mixed data types
// console.log(fruits[1]); // Find a specific value in the array

// const fruits = ['apples', 'oranges', 'pears']; // Example of mixed data types
// fruits[3] = 'grapes'; // Add a value to an array - this will replace the value in that spot if not added to the end
// fruits.push('mangos'); // Automatically add to the end
// fruits.unshift('strawberries'); // Automatically add to the beginning
// fruits.pop(); // Remove last entry
// console.log(fruits);
// console.log(Array.isArray(fruits)); // Check if an array
// console.log(fruits.includes('hello')) // Check if something is in an array
// console.log(fruits.indexOf('oranges')); // Find the position in the array of an array item

// // JS Promise - good for completing tasks in the background whilst doing other things e.g. file uploads
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve('Passed')
//     } else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('.then says ' + message)
// }).catch((message) => {
//     console.log('.catch says ' + message)
// })

// // JS Promise vs callback function
// // Using callback
// const userLeft = false
// const userWatchingCatMeme = false

// // Callback example
// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'RAH99 < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// })

// Using promise example
// // Avoiding callback 'hell' - nested callbacks within callbacks
// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//         } else if (userWatchingCatMeme) {
//             reject({
//                 name: 'User Watching Cat Meme',
//                 message: 'RAH99 < Cat'
//             })
//         } else {
//             resolve('Thumbs up and Subscribe')
//         }
//     })
// }

// watchTutorialPromise().then((message) => { // Can continue adding .then with arrow functions before the .catch for the various events instead of nested callbacks
//     console.log('Success: ' + message)
// }).catch((error) => {
//     console.log(error.name + ' ' + error.message)
// })

// // Run multiple promises in parallel
// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 recorded')
// })

// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// })

// // To get the above as they complete
// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((message) => {
//     console.log(message)
// })

// Async Await
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === 'Google') {
            resolve('Google waves')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra information ${response}`)
    })
}

// // Using Promise
// makeRequest('Facepalm').then(response => {
//     console.log('Response received')
//     return processRequest(response) // make this a return for a chained event with .then statements
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })

// Perform the above asynchroniously = makes the code easier to understand without the need to create different variables for the .then params
async function doWork() {
    try {
        const response = await makeRequest('Facebook') // await tells JS that it should continue doing other work until this has finished and then returned its response
        console.log('Response received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (error) {
        console.log(error)
    }
}
doWork()