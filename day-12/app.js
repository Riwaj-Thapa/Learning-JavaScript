// //callback hell

function getData(dataID){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data :",dataID);
        resolve("sucess");
 } ,3000);

    });
}

getData(1)
.then((res)=>{
    return getData(2);
})
    .then((res)=>{
        return getData(3);
    })
        .then((res)=>{
            console.log(res);
        });



// // Using the Promise

// let p1 = getData(1);

// p1.then((res)=>{
//     console.log(res)
// })

// // getData(1,()=>{
// //     getData(2,()=>{
// //         getData(3)
// //     });
// // });














// Promises

const getPromise =()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise")
        // reject("network error")
        resolve("success")
    });
};


let promise = getPromise();

promise.then((res)=>{
console.log("promise fulfilled",res);
});

promise.catch((err)=>{
console.log("promise didnot fulfilled",err);
})




