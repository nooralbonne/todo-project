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
    if (Gender == "Male" || "male") {
        alert("Hello, Mr " + Name + "!");
    } else if (Gender == "Female" || "female") {
        alert("Hello, Ms " + Name + "!");
    } else {
        alert("Hello " + Name + "!");
    }
}








