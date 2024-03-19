import {
    module1
} from './questions.js';

//global variables, could be changed by user using the back button

let username; 
let grade;
console.log($())

// Trigger for starting assessment
document.getElementById("submit").addEventListener("click", () => {
    username = document.querySelector('[name="username"]').value;
    grade = document.querySelector('[name="grade"]:checked').value;
    $(".start-wrapper").addClass("d-none");
    $("#question-wrapper").removeClass("d-none");
    insertFirstQuestion();
});

function insertFirstQuestion() {
    $(".question-title")[0].innerHTML = module1[0].name;
    $(".question-content")[0].innerHTML = module1[0].question;
}