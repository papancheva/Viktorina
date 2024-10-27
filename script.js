const questions = [
    {
        question: "Какво ще се случи с обема на водата, ако я замразим в кубче лед?",
        answers: ["Ще намалее", "Ще остане същият", "Ще се увеличи"],
        correct: 2
    },
    {
        question: "Кое от следните твърдения е вярно за газовете?",
        answers: ["Газовете нямат собствен обем, но имат собствена форма", "Газовете нямат нито собствен обем, нито форма", "Газовете имат собствен обем и форма"],
        correct: 1
    },
    {
        question: "Защо металните предмети бързо се затоплят, когато са под слънцето?",
        answers: ["Защото металите поглъщат светлина", "Защото металите са добри проводници на топлина", "Защото металите не се охлаждат"],
        correct: 1
    },
    {
        question: "Какво ще се случи с водата, ако я оставим на стайна температура за достатъчно дълго време?",
        answers: ["Ще се изпари", "Ще замръзне", "Ще стане твърдо вещество"],
        correct: 0
    },
    {
        question: "Кое от следните вещества може да се разтвори във вода?",
        answers: ["Пясък", "Сол", "Камък"],
        correct: 1
    },
    {
        question: "Какво се случва с телата при нагряване?",
        answers: ["Свиват се", "Променят цвета си", "Разширяват се"],
        correct: 2
    },
    {
        question: "Кое от следните вещества е необходимо, за да може един огън да гори?",
        answers: ["Водород", "Въглероден диоксид", "Кислород"],
        correct: 2
    },
    {
        question: "Кое от следните тела не е проводник на електричество?",
        answers: ["Метален проводник", "Стъклена чаша", "Медна жица"],
        correct: 1
    },
    {
        question: "Какво ще се случи, ако оставим метален предмет навън в дъждовно време?",
        answers: ["Ще ръждясва", "Ще остане същият", "Ще стане прозрачен"],
        correct: 0
    },
    {
        question: "Защо морската вода не може директно да се пие, въпреки че е течност?",
        answers: ["Защото съдържа сол и други разтворени вещества", "Защото съдържа ледени кристали", "Защото няма достатъчно минерали"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").textContent = `${currentQuestion + 1}. ${questions[currentQuestion].question}`;
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";

    questions[currentQuestion].answers.forEach((answer, index) => {
        const answerBox = document.createElement("div");
        answerBox.textContent = answer;
        answerBox.className = "answer-box";
        answerBox.onclick = () => selectAnswer(index);
        answersContainer.appendChild(answerBox);
    });

    document.getElementById("next-button").style.display = "none";
    document.getElementById("end-button").style.display = "none";
}

function selectAnswer(selected) {
    const answerBoxes = document.querySelectorAll(".answer-box");
    const correctAnswer = questions[currentQuestion].correct;

    if (selected === correctAnswer) {
        answerBoxes[selected].classList.add("correct");
        score++;
        document.getElementById("score").textContent = score;
    } else {
        answerBoxes[selected].classList.add("incorrect");
        answerBoxes[correctAnswer].classList.add("correct");
    }

    answerBoxes.forEach(box => box.onclick = null);

    if (currentQuestion < questions.length - 1) {
        document.getElementById("next-button").style.display = "inline";
    } else {
        document.getElementById("end-button").style.display = "inline";
    }
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function endGame() {
    document.querySelector(".question-container").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("end-button").style.display = "none";

    const result = document.getElementById("result");
    result.innerHTML = `Вие събрахте общо ${score} точки. `;

    if (score >= 9) {
        result.innerHTML += "Справихте се отлично! 😊";
    } else if (score >= 7) {
        result.innerHTML += "Справихте се много добре! 😊";
    } else if (score >= 5) {
        result.innerHTML += "Справихте се добре! 😊";
    } else {
        result.innerHTML += "Прочети още по темата и играй отново! 😞";
    }
}

// Зареждане на първия въпрос при стартиране на играта
loadQuestion();
