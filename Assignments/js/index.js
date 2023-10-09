// Code in Practice assignements 

//fizzBuzz assignment

let theRange = 1-100

function fizzBuzz (a = 1-100){
    for(a=0; a <= 100; a+=3) {
        console.log("fizz " + theRange[a]);
    }
} console.log("Fizz");

fizzBuzz();

// *** End of assignement 


//Week 1 assignment 



function calculateAverage(testScore1,testScore2,testScore3){
    //return (testScore1 + testScore2 + testScore3) / 3;
    console.log((testScore1 + testScore2 + testScore3) / 3);

}

calculateAverage(35,45,25);
calculateAverage(10,10,80);

// *** End of assignement 


// Week 2 Assignment.

// Task 1

let age = 33;
const votingAge = 18; 
 
function canVote(){
    if (age >= 18){
        console.log("You are " + age + " years old and can vote.");
    } else
        console.log("You are " + age + " years old and can't vote at this time.");
}

canVote();
age =14;
canVote();

// Task 2 

const favFruits = ['apples', 'kiwi\'s', 'mangoes', 'bananas', 'strawberries'];
const saying = "My favorite fruits are ";

function listOfFruits () {
    for(c=0; c<favFruits.length; c++){
        console.log(saying + ' '+  favFruits[c] +'.');
    }
}
listOfFruits();

// *** End of assignment.