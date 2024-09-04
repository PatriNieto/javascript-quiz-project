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
    new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4", 1),
    new Question("What is the capital of France?", ["Miami", "Paris", "Oslo", "Rome"], "Paris", 1),
    new Question("Who created JavaScript?", ["Plato", "Brendan Eich", "Lea Verou", "Bill Gates"], "Brendan Eich", 2),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
    // Add more questions here
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
  const minutes = Math.floor(quiz.timeRemaining / 60).toString().padStart(2, "0");
  const seconds = (quiz.timeRemaining % 60).toString().padStart(2, "0");

  // Display the time remaining in the time remaining container
  const timeRemainingContainer = document.getElementById("timeRemaining");

  timeRemainingContainer.innerText = `${minutes}:${seconds}`;

  // Show first question
  showQuestion();


  /************  TIMER  ************/

  let timer;


  /************  EVENT LISTENERS  ************/

  nextButton.addEventListener("click", nextButtonHandler);


  const botonRestartNode = document.querySelector("#restartButton")

  botonRestartNode.addEventListener("click", () => {
    endView.style.display = "none";
    quizView.style.display = "block";
    quiz.currentQuestionIndex = 0
    quiz.correctAnswers = 0
    quiz.shuffleQuestions();
    // new Quiz(questions, quizDuration, quizDuration);
    showQuestion();


  });

  /************  FUNCTIONS  ************/

  // showQuestion() - Displays the current question and its choices
  // nextButtonHandler() - Handles the click on the next button
  // showResults() - Displays the end view and the quiz results





  function showQuestion() {

    //preguntar por que las variables tienen que ir aqui 


    // If the quiz has ended, show the results
    if (quiz.hasEnded()) {
      showResults();
      return;
    }

    // Clear the previous question text and question choices
    /*  questionContainer.innerText = "";
     choiceContainer.innerHTML = ""; */

    // Get the current question from the quiz by calling the Quiz class method `getQuestion()`
    const question = quiz.getQuestion();
    console.log(question);
    // Shuffle the choices of the current question by calling the method 'shuffleChoices()' on the question object
    question.shuffleChoices();

    // YOUR CODE HERE:
    //
    // 1. Show the question
    // Update the inner text of the question container element and show the question text

    // 2. Update the green progress bar
    // Update the green progress bar (div#progressBar) width so that it shows the percentage of questions answered


    let progressWidth = 10

    questionContainer.innerHTML += `<p>  ${question.text}</p>`

    progressWidth = quiz.currentQuestionIndex + 10

    progressBar.style.width = `${progressWidth}%`; // This value is hardcoded as a placeholder




    // 3. Update the question count text 
    // Update the question count (div#questionCount) show the current question out of total questions

    questionCount.innerText = `Question ${quiz.currentQuestionIndex + 1} of 10`; //  This value is hardcoded as a placeholder



    // 4. Create and display new radio input element with a label for each choice.
    // Loop through the current question `choices`.
    // For each choice create a new radio input with a label, and append it to the choice container.
    // Each choice should be displayed as a radio input element with a label:




    //questionNode.innerHTML += `<p> Hola ${unicaPregunta[0] }</p>` 
    let choices = question.choices

    console.log("p", choices);
    choices.forEach((element, i) => {
      console.log(element);
      return choiceContainer.innerHTML += `<input type="radio" name="choice" value=${element}>
          <label>${element}</label>
        <br>`


    });




    // Hint 1: You can use the `document.createElement()` method to create a new element.
    // Hint 2: You can use the `element.type`, `element.name`, and `element.value` properties to set the type, name, and value of an element.
    // Hint 3: You can use the `element.appendChild()` method to append an element to the choices container.
    // Hint 4: You can use the `element.innerText` property to set the inner text of an element.

  }



  function nextButtonHandler() {
    let selectedAnswer; // A variable to store the selected answer value
    //choiceContainer es el 
    /* objeto quiz
  checkAnswer(answer) {
    if (answer) {
      this.correctAnswers++
    }
  } */
    // console.log("ey",choiceContainer.value);

    // respuesta.value.forEach((element) => {
    //   checkAnswer(element)
    // });


    // YOUR CODE HERE:
    //
    // 1. Get all the choice elements. You can use the `document.querySelectorAll()` method.

    const choices = document.querySelectorAll('input[name="choice"]')
    // 2. Loop through all the choice elements and check which one is selected
    // Hint: Radio input elements have a property `.checked` (e.g., `element.checked`).
    //  When a radio input gets selected the `.checked` property will be set to true.
    //  You can use check which choice was selected by checking if the `.checked` property is true.
    choices.forEach((choice) => {
      if (choice.checked) {
        selectedAnswer = choice.value
      }
    })
    console.log(selectedAnswer)

    // 3. If an answer is selected (`selectedAnswer`), check if it is correct and move to the next question
    // Check if selected answer is correct by calling the quiz method `checkAnswer()` with the selected answer.

    if (selectedAnswer) {
      quiz.checkAnswer(selectedAnswer)
      questionContainer.innerHTML = ""
      quiz.moveToNextQuestion()
      choiceContainer.innerHTML = ""

      showQuestion()
    }
    // Move to the next question by calling the quiz method `moveToNextQuestion()`.
    // Show the next question by calling the function `showQuestion()`.
  }




  function showResults() {

    // YOUR CODE HERE:
    //
    // 1. Hide the quiz view (div#quizView)
    quizView.style.display = "none";

    // 2. Show the end view (div#endView)
    endView.style.display = "flex";

    // 3. Update the result container (div#result) inner text to show the number of correct answers out of total questions
    resultContainer.innerText = `You scored ${quiz.correctAnswers} out of ${questions.length} correct answers!`; // This value is hardcoded as a placeholder
  }

});

