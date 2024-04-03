"use strict";

//popup box
//1- alert
//alert("welcome from code titens Teams")
 
//2- promot
var Name = prompt("Please Enter Your Name?")

var Gender = prompt("Please Enter Your Gender? (Male/Female)")

var Age = prompt("Please Enter Your Age?")
if (Age <= 0) {
    alert("The age should not less than or equal to zero")
}

//3- confirm box
var  welcomingMessage = confirm("Do you wants to skip the welcoming message?")

if (welcomingMessage) {
    console.log("User chose to skip the welcoming message.");
} else {
    displayWelcomeMessage();
} 

function displayWelcomeMessage(){
    if (Gender === "Male" || Gender === "male") {
        alert("Hello, Mr " + Name + "!");
    } else if (Gender ===  "Female" ||Gender ===  "female") {
        alert("Hello, Ms " + Name + "!");
    } else {
        alert("Hello " + Name + "!");
    }
}


// ===============lab- 06 ==============

let answerArray = ["yes", "no", "invalid"];

// =======first  Question========
var work = prompt("Do You Like Your Job? (Yes/No)");
function workQuestion() {
    if (work === "") {
        console.log(answerArray[2]);
    } else if (work === "yes" || work === "Yes" || work === "YES") {
        console.log(answerArray[0]);
    } else if (work === "no" || work === "No" || work === "NO") {
        console.log(answerArray[1]);
    } else {
        console.log(answerArray[2]);
    }
}
workQuestion();

// ==========second  Question==========
var code = prompt("Do You Hate Your code? (yes/No)");
function codeQuestion() {
    if (code === "") {
        console.log(answerArray[2]);
    } else if (code === "yes" || code === "Yes" || code === "YES") {
        console.log(answerArray[0]);
    } else if (code === "no" || code === "No" || code === "NO") {
        console.log(answerArray[1]);
    } else {
        console.log(answerArray[2]);
    }
}
codeQuestion();

// ==========third  Question==========
var cat = prompt("Do You Have A cat? (yes/No)");
function catQuestion() {
    if (cat === "") {
        console.log(answerArray[2]);
    } else if (cat === "yes" || cat === "Yes" || cat === "YES") {
        console.log(answerArray[0]);
    } else if (cat === "no" || cat === "No" || cat === "NO") {
        console.log(answerArray[1]);
    } else {
        console.log(answerArray[2]);
    }
}
catQuestion();
