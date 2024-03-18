document.getElementById("submit").addEventListener("click", function() {
    console.log("success");
    console.log(document.querySelector('[name="name"]').value);
    console.log(document.querySelector('[name="grade"]:checked').value);
    document.getElementsByClassName("assessment-wrapper")[0].innerHTML = "";
});