// Create a H2 heading elements with text -"Hello JavaScript". Append 
// "from Apna College students" to this using JSON.

let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " from the Apna College."



// Create 3 divs with common class name -"box". Acess them and add some unique text to each of them.

let divs = document.querySelectorAll(".box");

let i= 1;
for(div of divs){
    div.innerText = `div number ${i}`;
    i++;
}
