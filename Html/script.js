// 1) CALLBACKS

// . A javascript callback is funtion which is to be executed after another fnction has fineished executing.

let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const animateAll = (animate) => {
    setTimeout(() => {
        animate(fruits[0]);
         setTimeout(() => {
             animate(fruits[1]); 
             setTimeout(() => {
             animate(fruits[2]); 
         }, 1000);
         }, 1000);
    }, 1000)
}

const animate = (fruit) => {
    console.log("animting",fruit)
}

animateAll(animate);

// 2) SYNCRONOUS JAVASCRIPT

// . Asynchronous means code runs one line after another - each task wait for the previous one to finish

// 🧱 Synchronous Example
console.log("Start");
console.log("Processing...");
console.log("End");

// 3) ASYNCRONOUS JAVASCRIPT

// . Aynchronous means some task run in the background, allowing rest of the code to continiue without waiting

// ⚡ Asynchronous Example
console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 2000);

console.log("End");


// 💡 What is a Promise in JavaScript?