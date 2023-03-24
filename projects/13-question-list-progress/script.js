/* 
=========================
Promise.all() example
=========================
*/
/*
 const USERS_API = "https://jsonplaceholder.typicode.com/users";
const TODO_API = "https://jsonplaceholder.typicode.com/todos";

async function getUserAndTodo() {
  const [userRes, todoRes] = await Promise.all([
    fetch(USERS_API),
    fetch(TODO_API)
  ])

  const [userData, todoData] = await Promise.all([userRes.json(), todoRes.json()])
  console.log(userData, todoData)
}
getUserAndTodo();
*/


/* 
=========================
main app coding
=========================
*/
import { questionsData } from "./data.js";
import {submissionsData} from './data.js'

const progressBar = document.querySelector('.progress-bar')
const progressPercent = document.querySelector('.progress-percent');

const totalQCount = document.getElementById('totalQCount');
totalQCount.textContent = questionsData.length;
const correctAnsCount = document.getElementById('correctAnsCount')
let allCorrectCount = 0;

appendQuestionAndSubmission();

function appendQuestionAndSubmission() {
  const questionAndSubmission = getQuestionAndSubmission(questionsData, submissionsData);

  const questionAndSubmissionByCategory = getQuestionAndSubmissionByCategory(questionAndSubmission)

  console.log(questionAndSubmissionByCategory)
  const wrapper = document.getElementById('wrapper')

  for(let [category, questions] of Object.entries(questionAndSubmissionByCategory)) {
    const categoryDiv = createCategory(category, questions)
    wrapper.append(categoryDiv)
  }

  const calculateProgressPercent = (allCorrectCount/questionsData.length) * 100
  const progress = Math.round(calculateProgressPercent*100)/100
  
  progressPercent.textContent = `${progress}%`;
  if(progress >= 48) {
    progressPercent.style.color = '#fff'
  }

  progressBar.style.width = progress+'%'

  correctAnsCount.textContent = allCorrectCount

}


function createCategory(category, questions) {
  const categoryDiv = document.createElement('div');
  categoryDiv.classList.add('category');

  
  let correctCount = 0;
  questions.forEach(question => {
    const questionElm = document.createElement('div');
    questionElm.classList.add('question');

    const statusElm = document.createElement('div');
    statusElm.classList.add('status');
    const statusCheck = question?.status?.toLowerCase().replace('_', '-')
    statusElm.classList.add(statusCheck ?? 'unattempted')
    questionElm.append(statusElm);

    const questionNameElm = document.createElement('p');
    questionNameElm.classList.add('question-name');
    questionNameElm.textContent = question.name;
    questionElm.append(questionNameElm);

    const draggerElm = document.createElement('span')
    draggerElm.classList.add('dragger-item');
    questionElm.append(draggerElm)

    if(question?.status == 'CORRECT') {
      correctCount++;
      allCorrectCount++;
    }

    categoryDiv.append(questionElm)
  })

  const h2Elem = document.createElement('h2');
  h2Elem.textContent = `${category} - ${correctCount} / ${questions.length}`;

  categoryDiv.prepend(h2Elem)

  return categoryDiv
}


function getQuestionAndSubmission (questions, submissions) {
  let questionAndSubmission = questions.map(question => {
    const findSubmissionOfQuestion = submissions.find(submission => submission.questionId == question.id)

    if(findSubmissionOfQuestion) {
      const mergedQuestionAndSubmission = {
        ...question,
        ...findSubmissionOfQuestion
      }
      delete mergedQuestionAndSubmission.questionId

      return mergedQuestionAndSubmission

    } else {
      return {...question}
    }
    
  })


  return questionAndSubmission;
}


function getQuestionAndSubmissionByCategory (questionAndSubmission) {
  const categoryQuestions = {}
  questionAndSubmission.forEach(( question) => {
    if(categoryQuestions[question.category]) {
      categoryQuestions[question.category].push(question)
    } else {
      categoryQuestions[question.category] = [question]
    }
  })

  return categoryQuestions
}
