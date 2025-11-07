// 💡 What is Hoisting in JavaScript?

//. Hosting is javascript default behaviour of moving declaration (Variable and function) to the top of thier scope .before the code execution
//. function are fully hoisted, but variable (var) are hoisted without their variables
//. let and cont remain in a temporal dea zone

//⚙️ Example of Hoisting

greet();
console.log(variable)
function greet(){
    console.log('Hoting functiotn')
}

const variable = 9;
console.log(variable); // Output: 9  