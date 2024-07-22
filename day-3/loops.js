// for loops 
console.log("for loops")
for(let i =1;i<5;i++){
    console.log("Hello Riwaj sir",i)
}

// while loop
console.log("while loops")
let i=1;
while(i<=5){
    console.log("Hello Riwaj sir",i);
    i++;
}


// do while loop
let k = 1;
console.log("do while loops");

do{
    console.log(
        "Hello Riwaj sir",k
    );
    k++;

}while(k<=5);


//for-of loops 
let name = 'Riwaj';

for(let i of name ){
    console.log(i);
}


// for-in loops

let student = {
    name:"Riwaj",
    age:21,
    address:"Pokhara",
    status:false
}

for (let key in student){
    console.log("key =",key,"and value =",student[key]);
}