// Create a new button elements. Give it a text "Click me", background color of red and text color of white.Insert the button as the first elements inside the body tag.


// // =>>> self practice

// let newButton = document.querySelector("body")  
// let ok = newButton.innerHTML("<button> click me </button")
// console.log(ok)


let newBtn = document.createElement("button");

newBtn.innerText = "click me";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn)



// Create a <p> tag in html, give it a class and some styling.Now create a new class in CSS and try to append this class to the <p> elements. Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.

let newPara = document.querySelector("p");

// newPara.setAttribute("class","newClass");

newPara.classList.add("newClass");

newPara.classList.remove("newClass")

