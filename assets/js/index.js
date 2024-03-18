//global variables, could be changed by user using the back button

let username; 
let grade; 

// This stores the name and grade of the student to use at the end.
document.getElementById("submit").addEventListener("click", function() {
    username = document.querySelector('[name="name"]').value;
    grade = document.querySelector('[name="grade"]:checked').value;

});

//This function creates the HTML structure for the question page