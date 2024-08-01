let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");

const playGame= (userChoice)=>{

    console.log(`user Choice is ${userChoice}`);

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log("choice was clicked")
        const userChoice = choice.getAttribute("id")
        console.log(userChoice)

        playGame(userChoice);

    });

});
