const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Bill Gates",
        b: "Elon Musk",
        c: "Jeff Bezos",
        d: "Tony Stark",
        correct: "b"
    },
    {
        question: "What is the most used programming language?",
        a: "Java",
        b: "Python",
        c: "JavaScript",
        d: "C#",
        correct: "c"
    },
    {
        question: "Which company developed the iPhone?",
        a: "Google",
        b: "Apple",
        c: "Samsung",
        d: "Microsoft",
        correct: "b"
    }
];

const questionEl = document.getElementById('question');
const answersEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const scoreEl = document.getElementById('score');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answersEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            alert("Correct! You scored one mark.");
        } else {
            alert("Incorrect!");
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            scoreEl.innerText = `You scored ${score}/${quizData.length}!`;
            submitBtn.disabled = true;
        }
    }
});
