// 💡 what is async/await in JavaScript?

//. aysnc and await are modern feature of javascript that make working with promises  easier and more readable

//. they allow to write asynchronous code that look like synchronous code


// 🧠 Simple Interview Definition

//. async: Make a function return a promises
//. await: makes a javascript wait for a promises to resolve before moving to the next line.


async function fetchData() {
    console.log("start Fetching...");

    // Simulate an asynchronous operation using a Promise
    let result = await new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("Data fetched successfully!");
        },2000)
    });

    console.log(result);

    console.log("end Processing data...");
}

fetchData();


// 🖥 Output:

// Start fetching...
// (wait 2 seconds)
// Data fetched successfully!
// End of function
