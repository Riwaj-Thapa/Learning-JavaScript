// Create a toggle button that change the screen to dark-mode when clicked and light mode when clicked again.


// let toggle1 = document.querySelector(".changeMe");
// let body1 = document.querySelector("body");

// let mode = "light";  

// console.log(toggle1);

// toggle1.addEventListener("click",()=>{

//     if(mode==="light"){
//         // body1.style.backgroundColor="black";
//         mode="dark";
//         body1.classList.add("dark")
//         body1.classList.remove("light")
        
//         console.log(mode);
        

//     }else{
//         mode="light";
//         body1.classList.add("light")
//         body1.classList.remove("dark")
//         console.log(mode);

//     }

// });




let div1 = document.body.querySelector(".div1");
console.log(div1)

let body1= document.body.querySelector("body");

div1.addEventListener("mouseover",()=>{

    let screen = "light"

    if(screen==="light"){
        body1.style.backgroundColor="white";
        console.log(screen);
    }else{
        screen="dark"
        body1.style.backgroundColor="black";
        console.log(screen);
        
    }

}
);
