let correct;
let seconds = 60;
let correctAnswer = 0;
let incorrectAnswer = 0;

function getElement(id) {
    return document.getElementById(id);
}

function getRandomSport() {
    return sports[Math.floor(Math.random()*(sports.length - 1))];
}

function main() {

    let options = [];
    const maxOptions = 3;
    while (options.length < maxOptions) {
        let coun = getRandomSport();
        if (options.indexOf(coun) === -1) {
            options.push(coun);
        }
    }

    for (let i = 0; i < options.length; i++) {
        getElement(`option${i + 1}lable`).innerHTML = options[i].name;
        getElement(`option${i + 1}input`).value = options[i].name;
        getElement(`option${i + 1}input`).chacked = false;
    }
    correct = options[Math.round(Math.random() * (options.length - 1))]
    getElement("sport").src = correct.sport;
}

function timer() {
    setTimeout(finish, seconds * 1000);
    getElement("time").innerHTML = seconds;
    getElement("time").style.color = "#80FF00"
    let countdown = setInterval(function () {
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
    main();
}
function finish() {
    clearInterval(checkInterval);
    let percentage = Math.round(correctAnswer / (correctAnswer + incorrectAnswer)) * 100;
    if (isNaN(percentage)) {
        resultForAnswers = 100;
    } else {
        if (percentage >= 75 && percentage < 95) {
            resultForAnswers = "duq cucaberel eq lav ardyunq"
        } else if (percentage >= 95) {
            resultForAnswers = "duq cucaberel eq gerazanc ardyunq"
        }
    }
    getElement("alertaccuracy").innerHTML = ` ${resultForAnswers}%`;
}

let checkInterval = setInterval(check, 50);
main()
timer();






