let btn1 = document.querySelector("#btn1");

btn1.onclick= ()=>{
    console.log(" btn was clicked ");

}


let div1 = document.querySelector("div");

div1.onmouseover=()=>{
    let mouseOverDiv = 0;
    console.log(`Inside the div ${mouseOverDiv}`);
    mouseOverDiv++;
}