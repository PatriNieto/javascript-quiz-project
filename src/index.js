document.addEventListener("DOMContentLoaded", () => {
  /************  HTML ELEMENTS  ************/
  // View divs
  const quizView = document.querySelector("#quizView");
  const endView = document.querySelector("#endView");

  // Quiz view elements
  const progressBar = document.querySelector("#progressBar");
  const questionCount = document.querySelector("#questionCount");
  const questionContainer = document.querySelector("#question");
  const choiceContainer = document.querySelector("#choices");

  const nextButton = document.querySelector("#nextButton");

  // End view elements
  const resultContainer = document.querySelector("#result");


  /************  SET VISIBILITY OF VIEWS  ************/

  // Show the quiz view (div#quizView) and hide the end view (div#endView)
  quizView.style.display = "block";
  endView.style.display = "none";


  /************  QUIZ DATA  ************/

  // Array with the quiz questions
  const questions = [
    new Question("¿Cuál es el récord de la mayor cantidad de camisetas puestas al mismo tiempo?",
      ["150 camisetas", "247 camisetas", "305 camisetas", "430 camisetas"],
      "247 camisetas", 2),

    new Question("¿Cuántos plátanos puede pelar una persona con los pies en un minuto?",
      ["12 plátanos", "21 plátanos", "8 plátanos", "33 plátanos"],
      "21 plátanos", 3),

    new Question("¿Cuál es el récord de la mayor cantidad de cucharas equilibradas en una cara humana?",
      ["22 cucharas", "31 cucharas", "17 cucharas", "50 cucharas"],
      "31 cucharas", 2),

    new Question("¿Qué animal tiene el récord de explotar la mayor cantidad de globos en un minuto?",
      ["Un gato", "Un mono", "Un perro", "Un loro"],
      "Un perro", 1),

    new Question("¿Cuál es la mayor distancia que un avión ha sido arrastrado usando solo una barba?",
      ["50 metros", "30 metros", "20 metros", "10 metros"],
      "20 metros", 3),
    new Question("¿Cuál es el récord de la mayor cantidad de huevos rotos con la cabeza en un minuto?",
      ["30 huevos", "70 huevos", "150 huevos", "120 huevos"],
      "150 huevos", 3),

    new Question("¿Cuál es la mayor cantidad de notas adhesivas (Post-its) pegadas en el cuerpo de una persona en un minuto?",
      ["58 Post-its", "97 Post-its", "107 Post-its", "120 Post-its"],
      "107 Post-its", 2),

    new Question("¿Cuál es el número más alto de tatuajes de un mismo personaje de caricatura en el cuerpo de una persona?",
      ["153 tatuajes", "203 tatuajes", "78 tatuajes", "265 tatuajes"],
      "203 tatuajes", 3),

    new Question("¿Cuál es el récord de la mayor cantidad de pelotas de ping-pong atrapadas con los palillos en un minuto?",
      ["25 pelotas", "35 pelotas", "50 pelotas", "70 pelotas"],
      "35 pelotas", 2),

    new Question("¿Cuántas vueltas alrededor de su cola puede dar un perro en un minuto para establecer un récord Guinness?",
      ["50 vueltas", "90 vueltas", "105 vueltas", "155 vueltas"],
      "105 vueltas", 2)



  ];
  const quizDuration = 120; // 120 seconds (2 minutes)


  /************  QUIZ INSTANCE  ************/

  // Create a new Quiz instance object
  const quiz = new Quiz(questions, quizDuration, quizDuration);
  console.log(quiz);
  // Shuffle the quiz questions
  quiz.shuffleQuestions();


  /************  SHOW INITIAL CONTENT  ************/

  // Convert the time remaining in seconds to minutes and seconds, and pad the numbers with zeros if needed
  let minutes = Math.floor(quiz.timeRemaining / 60).toString().padStart(2, "0");
  let seconds = (quiz.timeRemaining % 60).toString().padStart(2, "0");


  // Display the time remaining in the time remaining container
  const timeRemainingContainer = document.getElementById("timeRemaining");

  timeRemainingContainer.innerText = `${minutes}:${seconds}`;

  // Show first question
  showQuestion();


  /************  TIMER  ************/


  let timer;

  resStar()

  /************  EVENT LISTENERS  ************/

  nextButton.addEventListener("click", nextButtonHandler);


  const botonRestartNode = document.querySelector("#restartButton")

  botonRestartNode.addEventListener("click", () => {


    resStar();
    endView.style.display = "none";
    quizView.style.display = "block";
    quiz.currentQuestionIndex = 0
    quiz.correctAnswers = 0
    quiz.shuffleQuestions();
    // new Quiz(questions, quizDuration, quizDuration);
    showQuestion();



  });

  nextButton.addEventListener("mouseenter", () => {
    nextButton.style.width = "250px"
    nextButton.style.transitionDuration = "0.5s"
  });

  nextButton.addEventListener("mouseleave", () => {
    nextButton.style.width = "160px"
    nextButton.style.transitionDuration = "0.5s"
  });

  /************  FUNCTIONS  ************/

  // showQuestion() - Displays the current question and its choices
  // nextButtonHandler() - Handles the click on the next button
  // showResults() - Displays the end view and the quiz results
  function resStar() {
    quiz.timeRemaining = quizDuration

    minutes = Math.floor(quiz.timeRemaining / 60).toString().padStart(2, "0");
    seconds = (quiz.timeRemaining % 60).toString().padStart(2, "0");
    timeRemainingContainer.innerText = `${minutes}:${seconds}`;

    timer = setInterval(() => {
      if (quiz.timeRemaining === 0) {
        showResults()
      }
      quiz.timeRemaining--
      minutes = Math.floor(quiz.timeRemaining / 60).toString().padStart(2, "0");
      seconds = (quiz.timeRemaining % 60).toString().padStart(2, "0");
      timeRemainingContainer.innerText = `${minutes}:${seconds}`
    }, 1000)

  }

  function showQuestion() {

    // If the quiz has ended, show the results
    if (quiz.hasEnded()) {
      showResults();
      return;
    }

    // Clear the previous question text and question choices
    questionContainer.innerText = "";
    choiceContainer.innerHTML = "";

    // Get the current question from the quiz by calling the Quiz class method `getQuestion()`
    const question = quiz.getQuestion();
    console.log(question);
    // Shuffle the choices of the current question by calling the method 'shuffleChoices()' on the question object
    question.shuffleChoices();

    let progressWidth = 10

    questionContainer.innerHTML += `<p>  ${question.text}</p>`
    progressWidth = quiz.currentQuestionIndex * 10
    progressBar.style.width = `${progressWidth}%`; // This value is hardcoded as a placeholder
    questionCount.innerText = `Question ${quiz.currentQuestionIndex + 1} of 10`;


    let choices = question.choices

    console.log("p", choices);
    choices.forEach((element, i) => {
      console.log(element);
      return choiceContainer.innerHTML += `<label style ="cursor: pointer;"><input type="radio" name="choice" value="${element}">${element}</label>
        <br>`


    });
  }

  function nextButtonHandler() {
    let selectedAnswer;

    const choices = document.querySelectorAll('input[name="choice"]')
    choices.forEach((choice) => {
      if (choice.checked) {
        selectedAnswer = choice.value
      }
    })
    console.log(selectedAnswer)


    if (selectedAnswer) {
      quiz.checkAnswer(selectedAnswer)
      quiz.moveToNextQuestion()

      showQuestion()
    }
  
  }
let giff2="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW1hbzhuaTg0bXFsYXEyejY0Z29ycTc1MzBrdnQ2a2JsaGdtYWFxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKr3nzbh5WgCFxe/giphy.gif"
let giff ="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWNpcWRnOWV5b2FvNmI5dmg4aHlzdzc4YjJtcnIxb3I3bG5wa2ZvNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mIZ9rPeMKefm0/giphy.gif"
  function showResults() {
    clearInterval(timer)

    // YOUR CODE HERE:

    // 1. Hide the quiz view (div#quizView)n
    quizView.style.display = "none";

    // 2. Show the end view (div#endView)
    endView.style.display = "flex";

    // 3. Update the result container (div#result) inner text to show the number of correct answers out of total questions
    resultContainer.innerText = `You scored ${quiz.correctAnswers} out of ${questions.length} correct answers!`
    if(quiz.correctAnswers >= 5){
      resultContainer.innerHTML += `<img src=${giff} alt="imagen de ganador">` // This value is hardcoded as a placeholder
    } else {
      resultContainer.innerHTML += `<img src=${giff2} alt="imagen de ganador">` // This value is hardcoded as a placeholder
    }
    
  }

});

