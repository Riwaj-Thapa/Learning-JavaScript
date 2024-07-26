let btn1 = document.querySelector("#btn1");


// adding event listener.


// btn1.onclick= ()=>{
//     console.log(" btn was clicked ");

// }

// let div1 = document.querySelector("div");

// div1.onmouseover=()=>{
//     let mouseOverDiv = 0;
//     console.log(`Inside the div ${mouseOverDiv}`);
//     mouseOverDiv++;
// };

let butn2 = document.querySelector("#ding");

// butn2.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// }


// Event listener in the javascript

btn1.addEventListener("click",()=>{
    console.log("button was clicked 1 ");
});
btn1.addEventListener("click",()=>{
    console.log("button was clicked 2");
});

const handler3 = ()=>{
    console.log("button was clicked 3 ");
};


btn1.addEventListener("click",handler3);

btn1.addEventListener("click",()=>{
    console.log("button was clicked 4 ");
});
btn1.addEventListener("click",()=>{
    console.log("button was clicked 5 ");
});

btn1.removeEventListener("click",handler3);







