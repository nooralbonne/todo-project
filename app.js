var name = prompt("Please enter your name:");
var gender = prompt("Please enter your gender (male or female):");
var age = parseInt(prompt("Please enter your age:"));
 
// Function to prompt the user and collect answers
function collectAnswers(question) {
    let answer = prompt(question);
    // If the answer is empty, consider it as "invalid"
    if (!answer) {
        answer = "invalid";
    }
    return answer;
}

// Function to collect multiple answers and store them in an array
function collectMultipleAnswers(questions) {
    let answers = [];
    for (let i = 0; i < questions.length; i++) {
        let answer = collectAnswers(questions[i]);
        answers.push(answer);
    }
    return answers;
}

// Main function to run the program
function main() {
    const questions = [
        "Are you ready to start?",
        "Do you like coding?",
        "Have you ever visited our website?",
        "Are you satisfied with our service?"
    ];
    const answers = collectMultipleAnswers(questions);
    // Print the answers array to the console
    console.log("User answers:", answers);
}

// Call the main function to start the program
main();

    if (age <= 0) {
        alert("Invalid age!");
    } 
else{
    if (gender === 'male') {      
        var skipWelcome = confirm("Do you want to skip the welcoming message?");    
        if (!skipWelcome)
        {
            alert("Welcome, Mr. " + name + "!");
 
        }
 
    } 
    else if (gender === 'female') {
        var skipWelcome = confirm("Do you want to skip the welcoming message?");
        if (!skipWelcome)
        {
            alert("Welcome, Ms. " + name + "!");
        }
    }
 
    else {
        var skipWelcome = confirm("Do you want to skip the welcoming message?");
        if (!skipWelcome)
        {
            alert("Welcome, " + name + "!");
        }
        
        
    }
}