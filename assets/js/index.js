import {
    modules
} from './questions.js';

//global variables, could be changed by user using the back button

var currentQuestionCode = "1";
var currentModuleCode = "1";
let username; 
let grade;


let test = modules.find(module => module.name === "module1");
console.log(test.content[2].name);

// Trigger for starting assessment and inserting question 1
$("#start-assessment").on("click", () => {
    username = document.querySelector('[name="username"]').value;
    grade = document.querySelector('[name="grade"]:checked').value;
    $(".start-wrapper").addClass("d-none");
    $("#question-wrapper").removeClass("d-none");
    insertQuestion();

});

// When show answer is clicked question title is replaced with the answer 
// and the question is replaced with the fully worked solution
// question buttons are replaced with answer buttons
$("#show-answer").on("click",  () => {
    console.log("Hello")
    let currentModule = modules.find(module => module.name === "module" + currentModuleCode);
    let currentQuestion = currentModule.content.find(question => question.questionCode === currentQuestionCode);
    $(".question-title")[0].innerHTML = "Answer: " + currentQuestion.answer;
    $(".question-content")[0].innerHTML = currentQuestion.solution;
    $("#questions-buttons").addClass("d-none");
    $("#answer-buttons").removeClass("d-none");
})


function insertQuestion() {
    let currentModule = modules.find(module => module.name === "module" + currentModuleCode);
    let currentQuestion = currentModule.content.find(question => question.questionCode === currentQuestionCode);
    $(".question-title")[0].innerHTML = currentQuestion.name;
    $(".question-content")[0].innerHTML = currentQuestion.question;
}

