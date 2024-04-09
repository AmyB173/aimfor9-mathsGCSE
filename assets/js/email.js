import {
    modules
} from './questions.js';

/*
    CREDIT: I used the follow repository as a guide on 
    how to use emailJS correctly: https://github.com/yamesjamess/feb-24-hackathon-love-riot
    CREDIT: full details in readme
*/

/* 
    Links to EmailJS Account -
    Initialize EmailJS user ID
*/
emailjs.init("k1hA0o1HzShiQtmFq");

// My OWN CODE (not taken from repository above)
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

/* 
    Code adapted - see credit above 
    This function sends the email using email JS API 
    passing in the correct parameters
    When waiting for the result a spinner appears
    If the email is sent successfully user is notified
    If the email failed to send the user is notified
*/
const sendEmail = () => {
    const email = document.getElementById("email").value;
    const resultsInfo = populateResultsForEmail();
    const username = $("#studentName")[0].innerHTML;
    const spinner = $(".spinner-grow");
    spinner.removeClass("d-none");
    emailjs
        .send("service_pnqn1sn", "template_b2pynfe", {
            to_email: email,
            name: username,
            results: resultsInfo
        })
        .then(

            function (response) {
                spinner.addClass("d-none");
                // Show Bootstrap alert
                const alertSuccess = document.getElementById("alertSuccess");
                alertSuccess.style.display = "block";
                document.getElementById("email").value = "";
                // Hide 
                setTimeout(() => {
                    alertSuccess.style.display = "none";
                }, 5000);
            },
            function (error) {
                alert("Failed to send the email - please try again");
                spinner.addClass("d-none");
            }
        );
}

/* 
    CREDIT: code taken from here: https://www.w3resource.com/javascript/form/email-validation.php
    This will check if the input is a valid email
*/
function validateEmail() {
    const email = document.getElementById("email").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

// This triggers the email to send when they send email button is clicked
$("#sendEmail").on("click", () => {
    if (validateEmail()) {
        sendEmail();
    }
});

// This triggers the email to send when the user presses enter when in the email input field
$("#email").on("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        sendEmail();
    }
})