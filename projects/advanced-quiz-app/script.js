//selcting elements
const homePage = document.getElementById("home");
const quizPage = document.getElementById("quiz");
const highScorePage = document.getElementById("highScorePage");
const endPage = document.getElementById("endPage");

const homePlayBtn = document.getElementById("homePlayBtn");
const navHighScoreBtn = document.getElementById("navHighScoreBtn");
const navPlayBtn = document.getElementById("navPlayBtn");

// selecting home input elements
const numberOfQuestion = document.getElementById("numberOfQuestion");
const category = document.getElementById("category");
const difficulty = document.getElementById("difficulty");

//selecting quiz page elements
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progresstText = document.getElementById("progresstText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

//slecting end page or result page elements
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");

//slecting high scores page elements
const tBody = document.getElementById("tBody");
const highScorePageHomeBtn = document.getElementById("highScorePageHomeBtn");

//initialize some variables
let qAmount = 0;
let qCategory = "";
let qDifficulty = "";
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let MAX_QUESTIONS;

// constants
const CORRECT_BONUS = 10;

navPlayBtn.addEventListener("click", quizPlay);
homePlayBtn.addEventListener("click", quizPlay);

function quizPlay(e) {
	e.preventDefault();
	if (numberOfQuestion.value && numberOfQuestion.value > 0) {
		qAmount = numberOfQuestion.value > 50 ? 50 : numberOfQuestion.value;
		qCategory =
			category.value === "generalKnowledge"
				? 9
				: category.value === "sports"
				? 21
				: category.value === "computers"
				? 18
				: category.value === "history"
				? 23
				: category.value === "film"
				? 11
				: category.value === "comics"
				? 29
				: category.value === "art"
				? 25
				: category.value === "politics"
				? 25
				: category.value === "geography"
				? 22
				: category.value === "sciAndNatures"
				? 17
				: category.value === "mathematics"
				? 19
				: "";
		qDifficulty = difficulty.value;

		homePage.classList.add("hidden");
		loader.classList.remove("hidden");
		fetchQuestions();
	} else {
		console.log("there is no question amount");
		alert("Enter the amount of questions");
	}
}

//fetch qustions form api
let allQuestions = [];
function fetchQuestions() {
	const url = `https://opentdb.com/api.php?amount=${qAmount}&category=${qCategory}&difficulty=${qDifficulty}&type=multiple`;

	fetch(url)
		.then((res) => res.json())
		.then((questions) => loadQuestions(questions.results));
}

//laode questions
function loadQuestions(loadedQuestions) {
	allQuestions = loadedQuestions.map((loadedQuestion) => {
		const formattedQuestion = {
			question: loadedQuestion.question,
		};

		const answerChoices = [...loadedQuestion.incorrect_answers];
		formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;

		answerChoices.splice(
			formattedQuestion.answer - 1,
			0,
			loadedQuestion.correct_answer
		);

		answerChoices.forEach((choice, index) => {
			formattedQuestion["choice" + (index + 1)] = choice;
		});
		return formattedQuestion;
	});

	startQuiz();
}

//start the quiz
const startQuiz = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...allQuestions];
	MAX_QUESTIONS = allQuestions.length;
	getNewQuestion();
	quizPage.classList.remove("hidden");
	loader.classList.add("hidden");
};

//get a new question
const getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
		// set mostRecentScore to localstorage
		localStorage.setItem("mostRecentScore", score);
		endPageFunc();
		quizPage.classList.add("hidden");
		endPage.classList.remove("hidden");
	} else {
		questionCounter++;
		//progress text ex. 1/10
		progresstText.innerText = `Question ${questionCounter}/${
			MAX_QUESTIONS || allQuestions.length
		}`;

		//update progress bar
		progressBarFull.style.width = `${
			100 * (questionCounter / allQuestions.length)
		}%`;

		const questionIndex = Math.floor(Math.random() * availableQuestions.length);

		currentQuestion = availableQuestions[questionIndex];
		question.innerText = `Q. ${currentQuestion.question}`;
		choices.forEach((choice) => {
			const number = choice.dataset["number"];
			choice.innerHTML = currentQuestion["choice" + number];
		});

		availableQuestions.splice(questionIndex, 1);
		acceptingAnswers = true;
		window.onbeforeunload = function () {
			return "Dude, are you sure you want to leave? Think of the kittens!";
		};
	}
};

//answering the quesitons
choices.forEach((choice) => {
	choice.addEventListener("click", function (e) {
		if (!acceptingAnswers) return;

		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset["number"];

		const rightOrWrongClass =
			selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

		rightOrWrongClass == "correct" ? increementScore(CORRECT_BONUS) : "";

		selectedChoice.parentElement.classList.add(rightOrWrongClass);
		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(rightOrWrongClass);
			getNewQuestion();
		}, 1000);
	});
});

//increment the score
const increementScore = (bonus) => {
	score += bonus;
	scoreText.innerText = score;
};

// result or end page funcitons
function endPageFunc() {
	const mostRecentScore = localStorage.getItem("mostRecentScore");
	finalScore.innerText = mostRecentScore;
	const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
	const MAX_HIGH_SCORES = 5;

	username.addEventListener("keyup", function () {
		saveScoreBtn.disabled = !username.value;
	});

	saveScoreBtn.addEventListener("click", function (e) {
		e.preventDefault();

		score = 0;
		const scores = {
			score: mostRecentScore,
			name: username.value,
		};

		highScores.push(scores);

		highScores.sort((a, b) => b.score - a.score);
		highScores.splice(5);
		localStorage.setItem("highScores", JSON.stringify(highScores));

		endPage.classList.add("hidden");
		homePage.classList.remove("hidden");
		scoreText.innerHTML = "0";
	});
}

// top 5 highScore on high scores page
navHighScoreBtn.addEventListener("click", function () {
	homePage.classList.add("hidden");
	highScorePage.classList.remove("hidden");

	const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

	tBody.innerHTML = "";

	highScores.map((highScore, index) => {
		tBody.innerHTML += `
            <tr>    
                <td> ${index + 1} </td>
                <td> ${highScore.name} </td>
                <td> ${highScore.score}  </td>
            </tr>
        `;
	});
});

// got the the high scores page
highScorePageHomeBtn.addEventListener("click", function () {
	homePage.classList.remove("hidden");
	highScorePage.classList.add("hidden");
});
