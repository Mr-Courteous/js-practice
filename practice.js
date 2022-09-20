

// '@ts-ignore'

function myName() {
    let actualAge = prompt("how old are you?");    
    let ageInDays = actualAge * 365;

    document.getElementById("age").innerHTML= "You are" + " " + ageInDays + " " + "days old";  
}




function myTime(i) {
 
    const d = new Date();
    // let hour= d.getHours();
    // let minutes= d.getMinutes();
    // let seconds= d.getSeconds();
    // var meridian = "pm"

    // if(hour >= 12){
    //     meridian= "pm"
    // }else{
    //     meridian="am"
    // }

    // if(hour > 12){
    //     hour = hour - 12
    // }

    // console.log (hour + ":" + minutes + ":" + seconds)

    document.getElementById("time"). innerHTML= d.toLocaleTimeString();

}



setInterval(myTime,1000)



function showElement(){
    document.querySelector(".list-one"). style. display = "block";
    document.getElementById ("ham"). style. display = "none";
    document.getElementById ("ham-c"). style. display = "block";

}

document.getElementById ("ham"). onclick= showElement;


document.getElementById ("ham-c"). onclick= hideElement;

function hideElement(){
    document.querySelector(".list-one"). style. display = "none";
    document.getElementById ("ham"). style. display = "block";
    document.getElementById ("ham-c"). style. display = "none";




}


// addEventListener ("click", showElement)



var randomDiceOne = ["Diceegame/dice1.png",
 "Diceegame/dice2.png",
 "Diceegame/dice3.png",
 "Diceegame/dice4.png",
 "Diceegame/dice5.png",
 "Diceegame/dice6.png"
]


function play (){

    var randomDiceOne = ["Diceegame/dice1.png",
 "Diceegame/dice2.png",
 "Diceegame/dice3.png",
 "Diceegame/dice4.png",
 "Diceegame/dice5.png",
 "Diceegame/dice6.png"
]    
var dice1 = document.querySelector('.player1-dice').src = randomDiceOne[Math.floor(Math.random()*6)];


var dice2 = document.querySelector('.player2-dice').src = randomDiceOne[Math.floor(Math.random()*6)];

console.log (randomDiceOne);

if (dice1 > dice2 ){
    document.getElementById('play').innerHTML= "PLAYER2 LOOSES";
} else if( dice1 < dice2) {
    document.getElementById('play').innerHTML= "PLAYER1 LOOSES";

} else if(dice1 = dice2 )
    document.getElementById('play').innerHTML= "DRAW";
}


// ROCK PAPER SCISSORS


let humanChoice = document.querySelectorAll('.one');
let compA = ['rock', 'paper', 'scissors'];
let done
let computerChoice
let r = "";
let one
let two
let three
let old = document.getElementById("house");
 

for (i =0; i < humanChoice.length ; i++){  
      humanChoice[i].addEventListener('click', doIt);
}

function doIt (e){
    var done= e.target.id;
    var R1 = e.target.src;
    let computer = Math.floor(Math.random() * compA.length);
    let computerChoice =(compA[computer]);
    console.log(done);
    console.log(computerChoice);
 
    if (done == computerChoice) {
        r = "draw";
    }
    if (done == 'rock' && computerChoice == 'paper') {
        r = "You lost";
    }
    if (done === 'rock' && computerChoice === 'scissors') {
        r = "You won";
    }
    if (done === 'paper' && computerChoice === 'scissors') {
        r = "You lost";
    }
    if (done === 'paper' && computerChoice === 'rock') {
        r = "You won";
    }
    if (done === 'scissors' && computerChoice === 'rock') {
        r = " You lost";
    }
    if (done === 'scissors' && computerChoice === 'paper') {
         r = "You won";
    }

    console.log(r);

    let one =    document.getElementById('rock').src; 
    let two =    document.getElementById('paper').src; 
    let three =    document.getElementById('scissors').src;  

    document.getElementById('rock').src = R1;


    if (computerChoice === 'rock'){
        document.getElementById('scissors').src = one;
    } else if ( computerChoice === 'paper'){
        document.getElementById('scissors').src = two;
    } else if (computerChoice === 'scissors'){
        document.getElementById('scissors').src = three;
    }

        document.getElementById('result-house').innerHTML = (r);

        old.style.display="none";



}

document.getElementById('reset-button'). addEventListener  ('click', Reset);

function Reset(){
    document.getElementById('rock').src = 'Diceegame/images (16).jpeg';
    document.getElementById('scissors').src = 'Diceegame/images (18).jpeg';

    old.style.display="inline-block";
    document.getElementById('result-house').innerHTML = ("");


}






