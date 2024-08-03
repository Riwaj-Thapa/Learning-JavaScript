let btn = document.querySelector("#btn1");
let pg = document.querySelector("#p1");

const URL = "https://cat-fact.herokuapp.com/facts";


btn.addEventListener("click",()=>{
    getFacts();



});


const getFacts = async ()=>{
    console.log("getting data....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
    pg.innerText=data[0].text

}
