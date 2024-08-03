// console.log("one");

// setTimeout(()=>{
//     console.log("two");
// },2000);//timeout

// console.log("three");


// function add(a,b){
//     console.log(a+b)
// }

// function addBoss(a, b, addCallback){
//     addCallback(a,b)
// }

// addBoss(1,2,add);


function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 1");
            resolve("success");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 2");
            resolve("success");
        },4000);
    });
}

console.log("Fetching the data 1...");

asyncFunc1().then((res)=>{

    console.log("Fetching the data 2...");

    asyncFunc2().then((res)=>{

    });
});

