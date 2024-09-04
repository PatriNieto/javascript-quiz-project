class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions
    this.timeLimit = timeLimit
    this.timeRemaining = timeRemaining
    this.correctAnswers = 0
    this.currentQuestionIndex = 0
  }

  // 2. getQuestion()

  getQuestion() {
    return this.questions[this.currentQuestionIndex]
  }

  // 3.
  moveToNextQuestion() {
    this.currentQuestionIndex++
    console.log(this.correctAnswers)
    //delete this.
    //this.choiceContainer.innerHTML = ""
  }

  // 4.
  shuffleQuestions() {
    // Definir el array global

    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))

      // Intercambiar los elementos en las posiciones i y j
      const temp = this.questions[i]
      this.questions[i] = this.questions[j]
      this.questions[j] = temp
    }
    console.log(this.questions)
    return this.questions
  }

  // 5.
  checkAnswer(answer) {
    if (answer == this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers++
console.log(typeof answer);    }
console.log(typeof this.questions[this.currentQuestionIndex].answer);    
  }

  // 6.
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false
    } else if (this.currentQuestionIndex === this.questions.length) {
      return true
    }
  }
  filterQuestionsByDifficulty(difficulty) {
    if (difficulty >= 1 && difficulty <= 3) {
      this.questions = this.questions.filter((cadaCuestion) => {
        return difficulty === cadaCuestion.difficulty
      })
    }
  }
  averageDifficulty() {
    let sum = this.questions.reduce((acc, eachQuestions) => {
      if (this.questions.length === 0 && !eachQuestions.difficulty) {
        return acc
      } else {
        return acc + eachQuestions.difficulty
      }
    }, 0)
    let media = sum / this.questions.length
    return media
  }
}
