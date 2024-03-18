//global variables, could be changed by user using the back button

let username; 
let grade; 

// Trigger for starting assessment
document.getElementById("submit").addEventListener("click", startAssessment);

// This stores the name and grade of the student to use at the end and starts the assessment
function startAssessment() {
    username = document.querySelector('[name="username"]').value;
    grade = document.querySelector('[name="grade"]:checked').value;
    $(".start-wrapper").addClass("d-none");
    $("#question-wrapper").removeClass("d-none");
}