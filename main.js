let seconds = 60;
let correctAnswer = 0;
let incorrectAnswer = 0;

function getElement(id) {
    return document.getElementById(id);
}

function getRandomsport() {
    return sports[Math.floor(Math.random(sports.length - 1) * 10)]
}

function main() {
    spor = getRandomsport();
    getElement("sport").src = spor.sport;
}

function timer() {
    setTimeout(finish, seconds * 1000);
    getElement("time").innerHTML = seconds;
    getElement("time").style.color = "#80FF00"
    let countdown = setInterval(function () {
        main();
        seconds--;
        getElement("time").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);

        }
        if (seconds === 10) {
            getElement("time").style.color = "orange";
        }


        if (seconds === 5) {
            getElement("time").style.color = "#ff0000";
        }
    }, 1000);

}

function check() {
    let input;
    try {
        input = document.querySelector('input[name="option"]:checked').value;
    } catch {
        return;
    }
    if (input === "Կառատե") {
        correctAnswer++;
        getElement("score").innerHTML = correctAnswer;
    }
    else {
        incorrectAnswer++;
    }
    clearInterval(checkInterval);
}
function finish() {
    clearInterval(checkInterval);
    let percentage = (correctAnswer / (correctAnswer + incorrectAnswer)) * 100;
    getElement("alertaccuracy").innerHTML = ` ${percentage}%`;
}
let checkInterval = setInterval(check, 50);






timer();