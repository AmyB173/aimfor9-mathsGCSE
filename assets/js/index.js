import {
    modules
} from './questions.js';

//global variables
var currentQuestionCode = 1;
var currentModuleCode = 1;
var failureCounter = 0;
let username; 
let grade;

// Trigger for starting assessment and inserting question 1
$("#start-assessment").on("click", () => {
    username = document.querySelector('[name="username"]').value;
    grade = document.querySelector('[name="grade"]:checked').value;
    $(".start-wrapper").addClass("d-none");
    $("#question-wrapper").removeClass("d-none");
    insertNextQuestion();

});

// When show answer is clicked question title is replaced with the answer 
// and the question is replaced with the fully worked solution
// question buttons are replaced with answer buttons
$("#show-answer").on("click",  () => {
    let currentModule = modules.find(module => module.name === "module" + currentModuleCode.toString());
    let currentQuestion = currentModule.content.find(question => question.questionCode === currentQuestionCode);
    $(".question-title")[0].innerHTML = "Answer: " + currentQuestion.answer;
    $(".question-content")[0].innerHTML = currentQuestion.solution;
    $("#questions-buttons").addClass("d-none");
    $("#answer-buttons").removeClass("d-none");
})

$("#yes-btn, #easy-btn").on("click", () => {
    questionPassed();
})

$("#no-btn, #hard-btn").on("click", () => {
    questionFailed();
})

$("#previous-btn").on("click", () => {
    if (currentQuestionCode > 1) {
        currentQuestionCode -= 1;
    } else {
        //makes the question number the last question of the previous module
        currentModuleCode -= 1;
        currentQuestionCode = currentModule().content.length;
    }
    //If they got the previous question wrong, but want to go back and correct it we don't want to double
    //count the wrong answer if they get it wrong again
    if (currentQuestion().mastered = false) {failureCounter -= 1};
    insertNextQuestion();
})

//returns the current module array
function currentModule() {
    return modules.find(module => module.name === "module" + currentModuleCode.toString());
}

//returns the current question object
function currentQuestion() {    
    return currentModule().content.find(question => question.questionCode === currentQuestionCode);
}

// changes back to question mode by adding in next question and removing answer buttons
// and adding question buttons
function insertNextQuestion() {
    $("#questions-buttons").removeClass("d-none");
    $("#answer-buttons").addClass("d-none");
    $(".question-title")[0].innerHTML = currentQuestion().name;
    $(".question-content")[0].innerHTML = currentQuestion().question;
}

// marks the current questions as mastered, updates question and module codes
// checks if the test if finished
// if it's not finished next question is initiated
function questionPassed() {
    markAsMastered();
    updateCodes();
    if (checkIfEndOfTest()) {return};
    insertNextQuestion();
}

// updates the failure counter for that module, updates question and module codes
// checks if the test if finished
// if it's not finished next question is initiated
function questionFailed() {
    failureCounter += 1;
    updateCodes();
    if (checkIfEndOfTest()) {return};
    insertNextQuestion();
}

// marks the current question key "mastered" as true
function markAsMastered() {
    modules.find(module => module.name === "module" + currentModuleCode).content.find(question => question.questionCode === currentQuestionCode).mastered = true;
}

// this function checks whether the module code should be updated and then updates if so
function updateCodes() {
    let endOfModule = currentQuestionCode == modules.find(module => module.name === "module" + currentModuleCode).content.length;
    let twoWrong = failureCounter === 2;    
    
    if (endOfModule || twoWrong) {
        // This means we move onto the next module
        // Questions restarts at 1 for new module
        // Resets failure counter for new module
        currentModuleCode += 1;
        currentQuestionCode = 1;
        failureCounter = 0;
    } else 
    {
        //Stay in this module but increase the question number
        currentQuestionCode += 1;
    }
}

//This function checks if we are at the end of the test
//If so results section is presented 
function checkIfEndOfTest() {
    let endOfTest = currentModuleCode > modules.length;
    if(endOfTest){
        $(".start-wrapper").addClass("d-none");
        $("#question-wrapper").addClass("d-none");
        $("#results-wrapper").removeClass("d-none");
        return true;
    }
    return false;
}

