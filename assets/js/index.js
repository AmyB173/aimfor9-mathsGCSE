import {
    modules
} from './questions.js';

//global variables
let currentQuestionCode = 1;
let currentModuleCode = 1;
let failureCounter = 0;
let username;
let grade;
let numberOfQuestions;

// ----------------------START SECTION----------------------------

/* 
    Insert Module Names and number of questions to 
    "check to see what modules will be in the test" button
    Designed to be dynamic so that the list will automatically 
    populate with any additional modules or questions
 */
window.onload = () => {
    // Populate module and question list on start page
    let list = "";
    for (const module of modules) {
        list += `<li><strong>${module.displayName}</strong>: ${module.content.length} questions</li>`;
    }
    $("#moduleList")[0].innerHTML = "<ul>" + `${list}` + "</ul>";
    // Count the number of modules and store
    numberOfQuestions = countQuestions();
};

// Trigger for starting assessment, removing the starting text and inserting question 1
$("#start-assessment").on("click", () => {
    username = document.querySelector('[name="username"]').value;
    grade = document.querySelector('[name="grade"]:checked').value;
    $(".start-wrapper").addClass("d-none");
    $("#explanation-text").addClass("d-none");
    $("#question-wrapper").removeClass("d-none");
    $("#progress-bar").removeClass("d-none");
    $("#question-additional-buttons").removeClass("d-none");
    insertNextQuestion();
});

// ----------------------QUESTION SECTION----------------------------

/* 
    When show answer is clicked, the question title is replaced with the answer 
    and the question is replaced with the fully worked solution
    The question buttons are replaced with answer buttons
*/
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
});

// The "yes" and "too easy" buttons both indicate a pass on that question
$("#yes-btn, #easy-btn").on("click", () => {
    questionFinished("pass");
});

// The "no" and "too hard" buttons both indicate a fail on that question
$("#no-btn, #hard-btn").on("click", () => {
    questionFinished("fail");
});

/*
    Returns to the previous question in the module unless
    you are on the first question of a new module in which case
    it will take you to the last question on the previous module
*/
$("#previous-btn").on("click", () => {
    if (currentQuestionCode > 1) {
        currentQuestionCode -= 1;
    } else {
        //goes back to previous module
        //makes the question number the last question of the previous module
        currentModuleCode -= 1;
        currentQuestionCode = currentModule().content.length;
    }
    updateProgress();
    /*
        If they got the previous question wrong, 
        but want to go back and correct it we don't want to double
        count the wrong answer if they get it wrong again
    */
    if (currentQuestion().mastered === false) {
        failureCounter -= 1;
    }
    insertNextQuestion();
});

/*
    the restart assessment button will reload the page 
    (there is a bootstrap modal in index.html that warns them beforehand)
*/
$(".restart-btn").on("click", () => {
    location.reload();
});

/*
    Ends the test by setting the module code greater than the number of modules
*/
$("#end-btn").on("click", () => {
    $('#end-modal').modal('hide');
    currentModuleCode = modules.length + 1;
    checkIfEndOfTest();
});

// Count total number of questions in test
function countQuestions() {
    let questions = 0;
    for (const module of modules) {
        questions += module.content.length;
     }
    return questions;
}

// Counts the number of questions completed
function countQuestionsCompleted() {
   // returns just the current question if we are on the first module
    if (currentModuleCode === 1) {
        return currentQuestionCode;
    } else { 
        //returns the sum of all previous questions in previous modules plus current question
        let questionsCompleted = 0;
        for (const module of modules) {
            let moduleNumber = parseInt(module.name.slice(-1));
            if (moduleNumber < currentModuleCode) {
                questionsCompleted += module.content.length;
            }
        }
        questionsCompleted += currentQuestionCode;
        return questionsCompleted;
    }
}

// Updates Progress on progress bar 
function updateProgress() {
    let progress = Math.round((countQuestionsCompleted()/numberOfQuestions)*100);
    let percentage = progress + "%";
    document.getElementById("progress-bar-display").style.width = percentage;
}

//returns the current module array
function currentModule() {
    return modules.find(module => module.name === "module" + currentModuleCode.toString());
}

//returns the current question object
function currentQuestion() {
    return currentModule().content.find(question => question.questionCode === currentQuestionCode);
}

/*  
    changes back to question mode by adding in next question 
    and removing answer button and adding question buttons
*/
function insertNextQuestion() {
    // previous button to be removed on first question
    if (currentQuestionCode === 1 && currentModuleCode === 1) {
        $("#previous-btn").addClass("d-none");
    } else if (currentQuestionCode === 2 && currentModuleCode === 1) {
        $("#previous-btn").removeClass("d-none");
    }
    //change from answer mode to question mode
    $("#questions-buttons").removeClass("d-none");
    $("#answer-buttons").addClass("d-none");
    //insert question title and content
    $(".question-title")[0].innerHTML = currentQuestion().name;
    $(".question-content")[0].innerHTML = currentQuestion().question;
}

/*
    marks the current questions as mastered, updates question and module codes
    checks if the test if finished
    if it's not finished next question is initiated
*/
function questionFinished(result) {
    // When the question is finished, update progress bar
    updateProgress();    
    /*
        mastered is automatically false
        if they pass the question is marked as mastered
        if incorrect the failure counter updates the number of failed questions in the module
    */
    if (result === "pass") {
        markAsMastered();
    } else {
        failureCounter += 1;
    }
    updateCodes();
    if (checkIfEndOfTest()) {
        return;
    }
    insertNextQuestion();
}

// marks the current question key "mastered" as true
function markAsMastered() {
    modules.find(module => module.name === "module" + currentModuleCode).content.find(question => question.questionCode === currentQuestionCode).mastered = true;
}

// checks whether the module code should be updated and then updates if so
function updateCodes() {
    let endOfModule = currentQuestionCode == modules.find(module => module.name === "module" + currentModuleCode).content.length;
    let twoWrong = failureCounter === 2;
    /*
        If end of module, all they already got two answers wrong
        we move onto the next module, questions restart at 1 for new module
        Resets failure counter for new module
    */
    if (endOfModule || twoWrong) {
        currentModuleCode += 1;
        currentQuestionCode = 1;
        failureCounter = 0;
    } else {
        //Stay in this module but increase the question number
        currentQuestionCode += 1;
    }
}

/*
    This function checks if we are at the end of the test
    If so results section is presented 
    If not, a value of false is returned
*/
function checkIfEndOfTest() {
    let endOfTest = currentModuleCode > modules.length;
    if (endOfTest) {
        $(".start-wrapper").addClass("d-none");
        $("#question-wrapper").addClass("d-none");
        $("#question-additional-buttons").addClass("d-none");
        $("#progress-bar").addClass("d-none");
        $("#results-wrapper").removeClass("d-none");
        $("#studentName")[0].innerHTML = username;
        populateResultsTable();
        // add JS confetti for end of test
        // CREDIT: code taken from JS confetti website
        // CREDIT: https://www.npmjs.com/package/js-confetti
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['📚', '✖️', '➕', '➗', '🔢', '📝', '📐', '🥇', '🤓', '🧠', '📈'],
        });
        jsConfetti.addConfetti();
        return true;
    }
    return false;
}

// ----------------------RESULTS SECTION----------------------------

//Build a table of results for each module
function populateResultsTable() {
    $("#results")[0].innerHTML = "";
    for (const module of modules) {
        //Adds the name of the topic
        $("#results")[0].innerHTML += `<h2>${module.displayName}</h2>`;
        let resultsTable = "";
        //Adds the result of the topic in the same row on the table
        for (const question of module.content) {
            let mastered = question.mastered ? "Mastered" : "Needs revision";
            resultsTable += `
            <tr>
                <th>${question.name}</th>
                <td>${mastered}</td>
            </tr>
        `;
        }
        $("#results")[0].innerHTML += "<table>" + `${resultsTable}` + "</table>";
    }
}