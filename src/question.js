class Question {
    // YOUR CODE HERE:
    //
    // 1. constructor (text, choices, answer, difficulty)
   
/* should receive 4 arguments in the constructor (text, choices, answer, difficulty).
should have 4 properties: text, choices, answer, difficulty.

should receive text (string) as its 1st argument and assign it to text property.

should receive choices (array of strings) as its 2nd argument and assign it to choices property.
should receive answer (string) as its 3rd argument and assign it to answer property.
should receive difficulty (number) as its 3rd argument and assign it to difficulty property. */
    constructor(text, choices, answer, difficulty){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }
   

    // 2. shuffleChoices()
    shuffleChoices(){

        // Definir el array global

        for (let i = this.choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            
            // Intercambiar los elementos en las posiciones i y j
            const temp = this.choices[i];
            this.choices[i] = this.choices[j];
            this.choices[j] = temp;
        }
             return this.choices;
        
        

        }   
       
    }   
