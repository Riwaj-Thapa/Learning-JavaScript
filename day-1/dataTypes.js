// Primitive datatypes

//  => Number , String, Boolean , undefined, null , BigInt,   Symbol


let x = BigInt("123");
let y = Symbol("Hello");

console.log(x," = ",typeof(x), " and ",y," = ",typeof(y));

// Non primitive datatypes

// objects => collection of values(key : "value")

// (arrays , Functions)


const student = {
    name : "Riwaj Thapa",
    age : 21,
    gpa : 3.36,
}

console.log(student)

console.log(typeof student)


console.log(student.age);

console.log(student['age']);



