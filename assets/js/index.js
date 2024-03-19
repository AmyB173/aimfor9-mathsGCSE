import {
    modules
} from './questions.js';

//global variables, could be changed by user using the back button

var currentQuestionCode = 1;
var currentModuleCode = 1;
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

$("#yes-btn").on("click", () => {
    markAsMastered();
    updateCodes();
    if (checkIfEndOfTest()) {return};
    
    insertNextQuestion();
})

$("#easy-btn").on("click", () => {
    markAsMastered();
    if (checkIfEndOfTest()) {return};
    updateCodes();
    insertNextQuestion();
})

function insertNextQuestion() {
    $("#questions-buttons").removeClass("d-none");
    $("#answer-buttons").addClass("d-none");
    let currentModule = modules.find(module => module.name === "module" + currentModuleCode);
    let currentQuestion = currentModule.content.find(question => question.questionCode === currentQuestionCode);
    $(".question-title")[0].innerHTML = currentQuestion.name;
    $(".question-content")[0].innerHTML = currentQuestion.question;
}

function markAsMastered() {
    modules.find(module => module.name === "module" + currentModuleCode).content.find(question => question.questionCode === currentQuestionCode).mastered = true;
}

// this function checks whether the module code should be updated and then updates if so
function updateCodes() {

    let endOfModule = currentQuestionCode == modules.find(module => module.name === "module" + currentModuleCode).content.length;
    let twoWrong = false;    
    // if we are at the end of the array 
    if (endOfModule) {
        currentModuleCode += 1;
        currentQuestionCode = 1;
    } else 
    {
        currentQuestionCode += 1;
    }
    // if we have got two or more questions wrong within a module
}

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