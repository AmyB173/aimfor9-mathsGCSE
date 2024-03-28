import {
    modules
} from './questions.js';

//global variables
let currentQuestionCode = 1;
let currentModuleCode = 1;
let failureCounter = 0;
let username;
let grade;

// ----------------------START SECTION----------------------------
// Insert Module Names to "check to see what modules will be in the test" button
// Designed to be dynamic so that the list will automatically populate with 
// any additional modules
window.onload = () => {
    let list = "";
    for (const module of modules) {
        list += `<li><strong>${module.displayName}</strong>: ${module.content.length} questions</li>`
    }
    $("#moduleList")[0].innerHTML = "<ul>" + `${list}` + "</ul>";
}

// Trigger for starting assessment and inserting question 1
$("#start-assessment").on("click", () => {
    username = document.querySelector('[name="username"]').value;
    grade = document.querySelector('[name="grade"]:checked').value;
    $(".start-wrapper").addClass("d-none");
    $("#explanation-text").addClass("d-none");
    $("#question-wrapper").removeClass("d-none");
    $("#question-additional-buttons").removeClass("d-none")
    insertNextQuestion();

});

// ----------------------QUESTION SECTION----------------------------
// When show answer is clicked question title is replaced with the answer 
// and the question is replaced with the fully worked solution
// question buttons are replaced with answer buttons
$("#show-answer").on("click", () => {
    let currentModule = modules.find(module => module.name === "module" + currentModuleCode.toString());
    let currentQuestion = currentModule.content.find(question => question.questionCode === currentQuestionCode);
    $(".question-title")[0].innerHTML = "ANSWER: " + currentQuestion.answer;
    $(".question-content")[0].innerHTML = `
    <p class="fs-3">Fully worked solution: </p>
    ${currentQuestion.solution}
    `;
    $("#questions-buttons").addClass("d-none");
    $("#answer-buttons").removeClass("d-none");
})

$("#yes-btn, #easy-btn").on("click", () => {
    questionFinished("pass");
})

$("#no-btn, #hard-btn").on("click", () => {
    questionFinished("fail");
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
    if (currentQuestion().mastered = false) { failureCounter -= 1 };
    insertNextQuestion();
})

$(".restart-btn").on("click", () => {
    location.reload();
})
$("#end-btn").on("click", () => {
    $('#end-modal').modal('hide');
    console.log(currentModuleCode);
    currentModuleCode = modules.length + 1;
    console.log(currentModuleCode);
    checkIfEndOfTest();
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
    // previous button to be removed on first question
    if (currentQuestionCode === 1 && currentModuleCode === 1) {
        $("#previous-btn").addClass("d-none")
    } else if (currentQuestionCode === 2 && currentModuleCode === 1) {
        $("#previous-btn").removeClass("d-none")
    }
    //change from answer mode to question mode
    $("#questions-buttons").removeClass("d-none");
    $("#answer-buttons").addClass("d-none");
    //insert question title and content
    $(".question-title")[0].innerHTML = currentQuestion().name;
    $(".question-content")[0].innerHTML = currentQuestion().question;
}

// marks the current questions as mastered, updates question and module codes
// checks if the test if finished
// if it's not finished next question is initiated
function questionFinished(result) {
    // mastered is automatically false
    // if they pass the question is marked as mastered
    // if incorrect the failure counter updates the number of failed questions in the module
    result === "pass" ? markAsMastered() : failureCounter += 1;

    updateCodes();
    if (checkIfEndOfTest()) { return };
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
    } else {
        //Stay in this module but increase the question number
        currentQuestionCode += 1;
    }
}

//This function checks if we are at the end of the test
//If so results section is presented 
function checkIfEndOfTest() {
    let endOfTest = currentModuleCode > modules.length;
    if (endOfTest) {
        console.log("in end of test");
        $(".start-wrapper").addClass("d-none");
        $("#question-wrapper").addClass("d-none");
        $("#question-additional-buttons").addClass("d-none");
        $("#results-wrapper").removeClass("d-none");
        $("#studentName")[0].innerHTML = username;
        populateResultsTable();
        return true;
    }
    return false;
}

// ----------------------RESULTS SECTION----------------------------

//Build a table of results for each module
function populateResultsTable() {

    $("#results")[0].innerHTML = "";

    for (const module of modules) {
        $("#results")[0].innerHTML += `<h2>${module.displayName}</h2>`
        let resultsTable = "";
        for (const question of module.content) {
            let mastered;

            question.mastered ? mastered = "Mastered" : mastered = "Needs revision";
            resultsTable += `
            <tr>
                <th>${question.name}</th>
                <td>${mastered}</td>
            </tr>
        `
        }
        $("#results")[0].innerHTML += "<table>" + `${resultsTable}` + "</table>";
    }
}

