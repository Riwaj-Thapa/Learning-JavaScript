// print all even numbers from 0 to 100.

for(let i =0;i<=100;i++){
    if(i%2===0){
        console.log(i)
    }
}

/*Create a game where you start with any random game numbers.
  Ask the user to keep guessing the game number until the enters
  correct value.*/

const num = 36;
let userNum = prompt("Enter the number..")

while(userNum != num){
    userNum = prompt("Wrong number please enter the number again.")

}
console.log("Congratulations you guessed the correct number i.e.",userNum)

/*
Prompt the user to enter their full name. Generate a username for them based 
on the input.Start username with @, followed by their full name and ending with the fullname length.
*/

let firstName = prompt("Enter your first name ");
let lastName = prompt("Enter you last name ");
name = firstName+lastName;

const name1 = console.log(`Your username is @${firstName}${lastName}${name.length}`)