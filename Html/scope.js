// 💡 What is Scope in JavaScript?

//. scopes in javascript,determine the accessibility or visibility of variables - where they can be used in code

//⚙️Types of scope in javascript

// 1. Global scope
// .global scope variable declare ouside the fuction or block are in global scope,accessible any where

let name = "Mukeshkanna"

function greet(){
    console.log('hello'+" "+name)
}

greet();
console.log(name)

// 2. Function Scope
//. variable declared inside a fuction are only accessible inside that function

function sayHello() {
  let message = "Hello!";
  console.log(message); // ✅ Works
}

sayHello();
console.log(message); // ❌ Error (not defined)


//3. Block scope (ES6)
//. let and const introduce block scope variable are only access inside the block {} where they are defined

{
    let x = 10;
    const y =2;
    var z = 20;
}

console.log(z); // ✅ Works (var is not block-scoped)
console.log(x); // ❌ Error
console.log(y); // ❌ Error