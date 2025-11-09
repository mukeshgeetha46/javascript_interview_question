// Reverse a string

function reverseString(str){
    return str.split("").reverse().join("");
}


console.log(reverseString("hello")); // Output: "olleh"

// Q2. Check if a string is a palindrome

function isPalindrome(str){
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// Q3. Count vowels in a string

function countVowels(str){
   
    return str.match(/[aeiouAEIOU]/gi)?.length || 0;
}

console.log(countVowels('javascript'))

// Q4. Find the first non-repeating character

function firstNonRepeatingChar(str){
    for(let char of str){
        if(str.indexOf(char) === str.lastIndexOf(char)) return char;
    }
    return null;
}

console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("hello")); // Output: "h"
console.log(firstNonRepeatingChar("aabb")); // Output: null

// Q5. Check if a number is prime

function isPrime(number){
    if(number < 2) return false;
    for(let i =2; i <= Math.sqrt(number); i++){
        if(number % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

// Q6. Find factorial of a number

function Factorial(n){
  return n === 0 ? 1 : n * Factorial(n - 1);
}

console.log(Factorial(5)); // Output: 120
console.log(Factorial(0)); // Output: 1


// Q9. Find the maximum number in an array
const numbers = [3, 5, 1, 8, 2];
const maxNumber = Math.max(...numbers);
console.log(maxNumber); // Output: 8

// Q10. Remove duplicates from an array
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// Q11. Flatten a nested array
const nestedArray = [1, [2, [3, 4]], 5,[6,7,8]];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]

// Q12. Find intersection of two arrays
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const intersection = array1.filter(value => array2.includes(value));
console.log(intersection); // Output: [3, 4]

// Q13. Clone an object
const originalObject = { a: 1, b: 2, c: { d: 3 } };

const cloneObject = JSON.parse(JSON.stringify(originalObject));
console.log(cloneObject); // Output: { a: 1, b: 2, c: { d: 3 } }

// Q14. Count character frequency
function charFrequency(str){
    return [...str].reduce((acc,char)=>{
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    },{});
}

console.log(charFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

// Q22. Generate random hex color
function genrateRandomhexcolor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}

console.log(genrateRandomhexcolor()); // Output: e.g., "#3e2f1b"

// Q23. Find the second largest number in an array
