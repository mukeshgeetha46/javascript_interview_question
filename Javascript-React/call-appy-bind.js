// 💡 What are call(), apply(), and bind() in JavaScript?

// 🟢 1. call()
//.  call() invokes the function immediatly and allow you to pass arguments one by one

function callExample(name,email) {
  return `Name: ${name}, Email: ${email}, Role: ${this.role}`;
}

const result1 = callExample.call({ role:"Admin" }, "John", "mukesh55@gmnail.com");
console.log(result1);

// 🟢 2. apply()
//. apply() is just like call(),but it takes argument as an array

const reply2 = callExample.apply({ role:"User" }, ["Alice", "kanna"]);
console.log(reply2);

// 🔵 3. bind()
//. bind() does not call function immediatly.it returns a new function with (this.) bound permanently

const reply3 = callExample.bind({ role:"User" }, ["Alice", "kanna"]);
console.log(reply3());