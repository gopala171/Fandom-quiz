var readlineSync = require('readline-sync');

var userName = readlineSync.question("Hi, May I have your name : ");
const chalk = require('chalk');
console.log(chalk.yellow("Hey there, "+ userName));
console.log("");

console.log("Welcome to the harry potter quiz");
console.log(chalk.blue("--------------------"));

var scores = 0;

function questionAnswer(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("")
    console.log("You are right");
    scores++;
  } else {
    console.log("")
    console.log("Oops, you went wrong");
    scores--;
  } 
  console.log("Current score: "+scores);
  console.log(chalk.blue("--------------------"));
  console.log("")
}


var questionAnsArray = [
{question: "What's the name of the game that is played in the movie goblet of fire : \n(a) quidditch \n(b) Wizard's Chess \n(c) Exploding Snap :", answer:"a"}, 

{question:"What pet did harry have :  \n(a) rat \n(b) owl \n(c) hippogriff :", answer:"b"},

{question: "What are the people without magical powers called in harry potter movies : \n(a) muggles \n(b) humans \n(c) none :", 
answer: "a"}, 

{question: "Who married harry potter : \n(a) Cho Chang \n(b) hermione granger \n(c) ginny weasley :",
answer: "c"},

{question: " we do not speak his name - this quote refers to whom  : \n(a) peter pettigrew \n(b) voldemort \n(c) Lucius Malfoy : ",
answer:"b"} 
];



for (var i=0; i<questionAnsArray.length; i++) {
  questionAnswer(questionAnsArray[i].question,questionAnsArray[i].answer);
}
if (scores>2) {
  console.log(chalk.red.bgWhite.bold("Congrats, you scored "+ scores));
} else {
  console.log(chalk.red.bgWhite.bold("Your score is " + scores +". Don't worry, try once more"));
}
