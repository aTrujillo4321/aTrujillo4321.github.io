document.querySelector("button").addEventListener("click", gradeQuiz);

displayQ1Options();
function displayQ1Options() {
    let q1Options = ["Phoenix", "New York", "Austin", "Toronto"];

    for (let i of q1Options) {
        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "q1";
        inputElement.value = i;
        console.log(inputElement);

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#q1Options").append(labelElement);
    }
}

displayQ5Options();
function displayQ5Options() {
    let q5Options = ["Atlanta", "Annapolis", "Augusta", "Austin", "Albany", "Anchorage", "Albuquerque"]

    for (let i of q5Options) {
        let inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        inputElement.name = "q5";
        inputElement.value = i;
        console.log(inputElement);

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#q5Options").append(labelElement);
    }
}

function feedback(isCorrect, feedbackId) {
    let feedbackArea = document.querySelector(`#${feedbackId}`);

    let existingIcon = feedbackArea.querySelector('img.feedback');
    if (existingIcon) {
        existingIcon.remove();
    }
    
    let iconSrc;
    let feedbackText = isCorrect ? "Correct mark" : "Incorrect mark";
    
    if (isCorrect) {
        iconSrc = "checkmark.png";
    } else {
        iconSrc = "crosscheck.png";
    }

    let img = document.createElement("img");
    img.src = iconSrc;
    img.alt = feedbackText;
    img.classList.add("feedback"); 
    
    feedbackArea.appendChild(img);
}


function gradeQuiz() {
    let score = 0;

    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer2 = document.querySelector("#popularCapt").value;
    let userAnswer3 = document.querySelector("#textInput").value;
    let userAnswer4 = document.querySelector("#numCapt").value;
    let userAnswer5 = document.querySelector("input[name=q5]:checked").value;

    if (userAnswer1 == "Phoenix") {
        let afterQuiz = document.querySelector("#afterQuiz");
        afterQuiz.textContent = "Correct";
        afterQuiz.style.color = "green";
        score += 20;
        feedback(true, "afterQuiz")
    }
    else {
        let afterQuiz = document.querySelector("#afterQuiz");
        afterQuiz.textContent = "Incorrect";
        afterQuiz.style.color = "red";
        feedback(false, "afterQuiz")
    }

    if (userAnswer2 == "Washington D.C") {
        let afterQuiz2 = document.querySelector("#afterQuiz2");
        afterQuiz2.textContent = "Correct";
        afterQuiz2.style.color = "green";
        score += 20;
        feedback(true, "afterQuiz2")
    } else {
        let afterQuiz2 = document.querySelector("#afterQuiz2");
        afterQuiz2.textContent = "Incorrect";
        afterQuiz2.style.color = "red";
        feedback(false, "afterQuiz2")
    }

    if (userAnswer3 == "Cheyenne") {
        let afterQuiz3 = document.querySelector("#afterQuiz3");
        afterQuiz3.textContent = "Correct";
        afterQuiz3.style.color = "green";
        score += 20;
        feedback(true, "afterQuiz3")
    }
    else {
        let afterQuiz3 = document.querySelector("#afterQuiz3");
        afterQuiz3.textContent = "Incorrect";
        afterQuiz3.style.color = "red";
        feedback(false, "afterQuiz3")
    }

    if (userAnswer4 == "51") {
        let afterQuiz4 = document.querySelector("#afterQuiz4");
        afterQuiz4.textContent = "Correct";
        afterQuiz4.style.color = "green";
        score += 20;
        feedback(true, "afterQuiz4")
    }
    else {
        let afterQuiz4 = document.querySelector("#afterQuiz4");
        afterQuiz4.textContent = "Incorrect";
        afterQuiz4.style.color = "red";
        feedback(false, "afterQuiz4")
    }

    if (userAnswer5 == "Atlanta" || userAnswer5 == "Annapolis" || userAnswer5 == "Augusta" || userAnswer5 == "Austin" || userAnswer5 == "Albany") {
        let afterQuiz5 = document.querySelector("#afterQuiz5");
        afterQuiz5.textContent = "Correct";
        afterQuiz5.style.color = "green";
        score += 20;
        feedback(true, "afterQuiz5")
    }
    else {
        let afterQuiz5 = document.querySelector("#afterQuiz5");
        afterQuiz5.textContent = "Incorrect";
        afterQuiz5.style.color = "red";
        feedback(false, "afterQuiz5")
    }
    document.querySelector("#finalScore").textContent = score;

    let congratsMsg = document.getElementById("congrats");
    if (score === 100) {
        congratsMsg.textContent = "Perfect Score!";
        congratsMsg.style.color = "gold"; 
    } else if (score >= 80) {
        congratsMsg.textContent = "Great job!";
        congratsMsg.style.color = "green";
    } else {
        congratsMsg.textContent = "Keep practicing and try again!";
        congratsMsg.style.color = "red";
    }
    updateTimesTaken(true);
}

function updateTimesTaken(isGrading) {
    let times = parseInt(localStorage.getItem('timesTaken')) || 0; 
    if (isGrading) {
        times++;
        localStorage.setItem('timesTaken', times);
    }
    document.getElementById("timesTaken").textContent = times;
}