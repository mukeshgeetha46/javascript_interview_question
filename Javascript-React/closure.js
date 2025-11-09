// 💡 What is a Closure in JavaScript?

//. A closure is created 
// when a function is remember and access the variable from its outer scope 
// even after that outer function has finished executing.

// ⚙️ Example of Closure

function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count)
    }

    return inner;
}

const count = outer();
count(); // Output: 1
count(); // Output: 2
count(); // Output: 3