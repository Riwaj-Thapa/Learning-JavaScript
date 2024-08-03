function getData(dataId){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log("data : ",dataId);
        reslove(200);
        },2000)
    });
}
// Async-await



async function getAllData(){
    await getData(1);

    await getData(2);

    await getData(3);

 
}



//IIFE (Immediately Invoked Function Expression)

(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
}
)();




