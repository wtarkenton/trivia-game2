var questions = [{
  "question": "Are dolphins fish?",
  "option1": "Maybe",
  "option2": "yes",
  "option3": "Not sure",
  "option4": "They are mammals",
  "answer": "4",
}, {
  "question": "What is the Chicken of the Sea?",
  "option1": "Sea Chicken",
  "option2": "Tuna",
  "option3": "Dolphin",
  "option4": "Sea Cucumber",
  "answer": "2",
}, {
  "question": "Who's faster Michael Phelps or a Great White Shark",
  "option1": "Phelps",
  "option2": "Great White Shark",
  "Answer": "2",
  
}, {
   "question": "What is the funniest fish in the sea?",
  "option1": "Puffer Fish",
  "option2": "Star Fish",
  "option3": "Clown Fish",
  "option4": "Tuna",
  "answer": "3",
  
}, {
  "question": "Who is Spongebob's best friend?",
  "option1": "Patrick",
  "option2": "Sandy",
  "option3": "Mr. Krabs",
  "option4": "Ms. Puff",
  "answer": "1",

}, {
  "question":"Is this the Krusty Krab",
  "option1": "Yes this is the Krusty Krab",
  "option2": "NO THIS IS PATRICK!!!",
  "option3": "Yes may I take your order",
  "option4": "Give me the Secret formula",
  "answer": "2",

}, {
  "question": "What's funnier than 24",
  "option1": "3",
  "option2": "42",
  "option3": "25",
  "option4": "86",
  "answer": "3",
}, {
  "question": "What is below a C?",
  "option1": "A",
  "option1": "B",
  "option3": "C",
  "option4": "D",
  "answer": "4",
  
}];

var currentQuestion= 0;
var score = 0;
var totQuestions = questions.length; 

var container = document.getElementById('quizContainer');
var questionEL= document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2= document.getElementById('opt2');
var opt3= document.getElementById('opt3');
var opt4= document.getElementById('opt4');
var nextButton= document.getElementById('nextButton');
var resultCont= document.getElementById('result');

function loadQuestion (questionsIndex) {
  var q = questions[questionsIndex];
  questionEL.textContent = (questionsIndex + 1) + '. ' + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4; 
};

function loadNextQuestion() {  //shouldnt be blue querySelector
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption){
    alert("Please select your answer!");
    return;
  }
  var answer = selectedOption.value; //value should be blue
  if(questions[currentQuestion].answer == answer){
    score +=10;
  }
  selectedOption.checked = false; //checked should be blue
  currentQuestion++;
  if(currentQuestion == totQuestions -  1){
    nextButton.textContent = 'Finish';
  }
  if(currentQuestion == totQuestions){
    container.style.display = 'none';
    resultCont.style.display = ''; //style.display should be blue
    resultCont.textContent = 'Your Score: ' + score;
    return;
  }
  loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);













