const quizData = [
  {
    question: "How old is Zoirbek?",
    a: "17",
    b: "19",
    c: "21",
    d: "23",
    correct: "b",
  },
  {
    question: "What is the most popular programming language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Zoirbek Qutbiddinov",
    b: "Donald Trump",
    c: "Baraka Obama",
    d: "Joe Biden",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Jason Object Notation",
    c: "Cascading Style Sheet",
    d: "Object Oriented Programming",
    correct: "a",
  },
];
const questionEl = document.getElementById("question"),
  a_text = document.getElementById("a_text"),
  b_text = document.getElementById("b_text"),
  c_text = document.getElementById("c_text"),
  d_text = document.getElementById("d_text"),
  btn = document.getElementsByTagName("button")[0],
  answerEls = document.querySelectorAll(".question"),
  quiz = document.getElementById("quiz");
let currentQuiz = 0;
loadQuiz();
function loadQuiz() {
  deselected();
  let currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function deselected() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
let score = 0;
btn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
      <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
