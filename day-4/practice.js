/* 
For a given array with marks of students -> [85,97,44,37,76,60].
Find the average marks of the entire class.
*/

let marks = [85,97,44,37,76,60];
let sum = 0;
let average;

for (let i = 0;i<marks.length;i++){
    sum+=marks[i];
}
average = sum/marks.length;

console.log(`Average marks is ${average}`);

/*
For a given array with prices of 5 items -> [250,645,300,900,50].
All items have an offer of 10% OFF on them. Change the array to store
final price after applying offer.
*/

let intialPrice = [250,645,300,900,50];
let finalPrice = [];
for (let val of intialPrice){
    discountPrice= val - (0.1 * val)
    finalPrice.push(discountPrice)

}

console.log(`Initial price ${intialPrice}`)
console.log(`final price ${finalPrice}`);
console.log(typeof finalPrice);


/**
 * Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix".
 * a. Remove the first company from the array.
 * b. Remove the Uber and add Ola in its place.
 * c. Add Amazon at the end.
 */

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// a.
companies.shift();
console.log(companies);

// b.
companies.splice(1,1,"Ola");
console.log(companies);

// c.
companies.push("Amazon");
console.log(companies);


