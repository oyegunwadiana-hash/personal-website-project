let answer1 = "C";
let answer2 = "A";


function showQuiz() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("access-granted").style.display = "none";
    document.getElementById("access-denied").style.display = "none";
    document.getElementById("main-website").style.display = "none";
}


function selectAnswer(question, answer, button) {

    const buttons = document.querySelectorAll(
        ".question" + question + " button"
    );

    buttons.forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    if (question === 1) {
        answer1 = answer;
    }

    if (question === 2) {
        answer2 = answer;
    }
}


function checkQuiz() {

    const answer3 = document.getElementById("answer3").value.toLowerCase().trim();

    if (
        answer1 === "C" &&
        answer2 === "A" &&
        answer3 === "picaboo"
    ) {
        showAccessGranted();
    } else {
        showAccessDenied();
    }
}


function showAccessGranted() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("access-granted").style.display = "block";
}


function showAccessDenied() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("access-denied").style.display = "block";
}


function showMainWebsite() {
    document.getElementById("access-granted").style.display = "none";
    document.getElementById("main-website").style.display = "block";
}
