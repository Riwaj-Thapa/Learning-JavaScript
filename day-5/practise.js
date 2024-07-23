// Create a functions using the "function" keyword that takes a String as an argument and returns the number of vowels in the strings.


// Normal functions..

function countVowels(a) {
    let sum = 0;
    for (let i of a) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            sum += 1;
        }
    }
    console.log(`The number of vowels are ${sum}`);
}

countVowels("aaa");

// Arrows functions..

const countVowelsArrows = (a)=>{
    let sum = 0;
    for (let i of a) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            sum += 1;
        }
    }
    console.log(`The number of vowels are ${sum}`);
};

countVowelsArrows("aaa");



// For a given array of numbers, print the square of each value using the forEach loop.


let number = [1,2,3,4,5,6,7,8];
let numberSquare = [];

number.forEach((val)=>{
    numberSquare.push(val*val)
    }
);
console.log(numberSquare);


// We are given array of marks of students. Filter out the marks of students that scored 90+.

let arr = [134,78,99,45,67,7,78];

let newArr = arr.filter((val)=>{

    return val>90;

});

console.log(newArr);


// Take a number n as input from user. Create an array of numbers form 1 to n.
// Use the reduce method to calculate the sum of all numbers in the array.
// Use the reduce method to calculate the product of all numbers in the array.


let userInput = prompt("Enter the number ...");
let arr11 = [];

for(let i = 1;i<=userInput;i++){
    arr11.push(i);
    
}

let newValue = arr11.reduce(
    (pre,curr)=>{
        return pre + curr ;
    }
);

console.log(`The sum of all the elements is the arry is ${newValue}`);



let newMultiple = arr11.reduce((pre,val)=>{
    return pre * val
});

console.log(`The product of all the elements is the arry is ${newMultiple}`);





