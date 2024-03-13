let container =document.getElementById("stick");
const rockStick=document.getElementById("rock");
const paperStick=document.getElementById("paper");
const scissorStick=document.getElementById("scissor");

rockStick.innerHTML='👊';
paperStick.innerHTML='🖐';
scissorStick.innerHTML='✌';

document.getElementById("input") =  "choose";

function getUserChoice (userInput) {
    if (userInput === rockStick || userInput === paperStick || userInput === scissorStick ) {
        return userInput;
      }
} 
let user= getUserChoice(container);

function getComputerChoice(){
    const random = Math.floor(Math.random() *3);
    if (random === 0){
        return "rock";
    }
    else if (random === 1){
        return "paper";
    }
    else if(random ===2){
        return "scissor";
    }
};
const computer= getUserChoice(container);

function determineWinner(userChoice,computerChoice){
    if(userChoice === computerChoice){
      document.getElementById(input).innerHTML="no scored";
    }
if (userChoice === paperStick) {
    if (computerChoice === "scissor") {
      document.getElementById("input").innerHTML=  "your score: 0  computer score: 1";
    } 
    else {
        document.getElementById("input").innerHTML =  'your score: 1  computer score: 0';
    }
  }
  if (userChoice ===scissorStick) {
    if (computerChoice === "rock") {
        document.getElementById("input").innerHTML =  'your score: 0  computer score: 1';
    } 
    else {
        document.getElementById("input").innerHTML =  'your score: 1  computer score: 0';
    }
  }
  else if(userChoice === rockStick){
    if (computerChoice === "paper"){
        document.getElementById("input").innerHTML =  'your score: 0  computer score: 1'; 
    }
    else {
        document.getElementById("input").innerHTML=  'your score: 1  computer score: 0';
      } 
}

};
let result=determineWinner(user,computer);
  function playGame(){

    let  userChoice =getUserChoice(paperStick);
    let  computerChoice=getComputerChoice(rockStick);
    console.log(determineWinner(userChoice, computerChoice));
  }