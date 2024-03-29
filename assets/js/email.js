import {
    modules
} from './questions.js';


// CREDIT: I used the follow repository as a guide on how to use emailJS correctly: https://github.com/yamesjamess/feb-24-hackathon-love-riot
// CREDIT: full details in readme

// Links to EmailJS Account -
// Initialize EmailJS user ID
emailjs.init("k1hA0o1HzShiQtmFq");

// My OWN CODE
const populateResultsForEmail = () => {
    let resultsString = "";
    for (const module of modules) {
        resultsString += `${module.displayName}`.toUpperCase() + "\n";
        for (const question of module.content) {
            let mastered;
            question.mastered ? mastered = "Mastered" : mastered = "Needs revision";
            if (question.questionCode == module.content.length) {
                resultsString += question.name + ": " + mastered + "\n\n";
            } else {
                resultsString += question.name + ": " + mastered + "\n";
            }
        }
    }
    return resultsString;
}

//Code adapted - see credit above 
const sendEmail = () => {
    const email = document.getElementById("email").value;
    const resultsInfo = populateResultsForEmail();
    const username = $("#studentName")[0].innerHTML;
    emailjs
        .send("service_pnqn1sn", "template_b2pynfe", {
            to_email: email,
            name: username,
            results: resultsInfo
        })
        .then(
            function (response) {
                // Show Bootstrap alert
                const alertSuccess = document.getElementById("alertSuccess");
                alertSuccess.style.display = "block";
                // Hide after 5 seconds
                setTimeout(() => {
                    alertSuccess.style.display = "none";
                }, 2500);
            },
            function (error) {
                alert("Failed to send the email.");
            }
        );
}

$("#sendEmail").on("click", sendEmail);