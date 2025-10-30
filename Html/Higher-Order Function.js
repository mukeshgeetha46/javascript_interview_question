// 💡 What is a Higher-Order Function (HOF)?

//. Higher order function is a function that either

//1.takes another function as an argument
//2. return a function as its result

//3. many array methos in javascript are in higher order function
// .functions like map,filter and reduce are built in higher order fuction because they accept function as argument

//this function are powerful because they allow us to reuse logic and make code cleaner and modular

function greet(name){
    return "Hello " + name;
}

function processUserInput(callback){
    const name = "Alice";
    console.log(callback(name));
}

processUserInput(greet);


