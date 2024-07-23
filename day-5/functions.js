function sum(a,d){
    s = a+d;
    return s;
}

const arrowSum = (a,d)=>{
    console.log(a+d);
};

arrowSum(9,7);



const mult = (a,b)=>{
    console.log(a*b);
};

mult(5,10);


// for each loops in array


function abd(){
    console.log("Hello World")
}

function myFun(abd){
    return abd
}

//  splice 

let arr = [1,2,3,4,5,6,7,8,9];

arr.forEach(function myFunc(val){
    console.log(val);
});



let number1 = [1,2,3,4,5,6,7,8];
let numberSquare = [];

number1.forEach((val)=>{
    numberSquare.push(val*val)
    }
);
console.log(numberSquare);


// using map

let number = [1,2,3,4,5,6,7,8];

let newNumber = number.filter((val)=>{
    return val%2==0;

})
console.log(newNumber);


