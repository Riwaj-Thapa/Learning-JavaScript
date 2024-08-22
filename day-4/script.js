let marks = [90,78,56,40,95];

// for-in loops 
for(let i in marks){
    console.log(marks[i]);
}

console.log(" ")

// for loops
for(let i =0;i<marks.length;i++){
    console.log(marks[i]);
}

console.log(" ")
// for-of loops 

for(let el of marks){
    console.log(el);

}

// push functions of arrays.

let items = [1,2,3,4,5,56,6]

items.push(0,1,2,3,4,5)

console.log(items)


console.log(typeof items.toString());


// Concat fuctions of arrays.

let marvel = ["thor","spider man","ironman"];
let dc_heros = ["superman","batman"];

dc_heros.splice(1,2,"BS","RT");

console.log(dc_heros);

console.log(marvel.concat(dc_heros));

marvel.push("hello");

console.log(marvel);

marvel.pop();
console.log(marvel);

console.log(marvel.toString());
console.log(marvel);





