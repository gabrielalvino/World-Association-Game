const scoreDisplay = document.getElementById("score-display");
const questionDisplay = document.getElementById("question-display");

const questions = [
  {
    quiz: ["In The End","Numb","Faint"],
    options: ["Linkin Park", "Fall Out Boy"],
    correct: 1,
  },
  {
    quiz: ["House Of Memories", "Emperor's New Clothes", "Ballad Of Mona Lisa"],
    options: ["Panic! At The Disco","Fall Out Boy"],
    correct: 1,
  },
  {
    quiz: ["Decode", "Misery Business", "Ignorance"],
    options: ["Evanescence", "Paramore"],
    correct: 2,
  },
  {
    quiz: ["It's My Life", "Misunderstood", "Livin' On A Prayer"],
    options: ["Bon Jovi", "Scorpions"],
    correct: 1,
  },
  {
    quiz: ["Wind Of Change", "Still Loving You", "Send Me An Angel"],
    options: ["Van Halen", "Scorpions"],
    correct: 2,
  },
  {
    quiz: ["Final Countdown ", "Carrie", "Rock the Night"],
    options: ["Europe", "Audioslave"],
    correct: 1,
  },
  {
    quiz: ["Basket Case ","Boulevard Of Broken Dreams", "Holiday"],
    options: ["Green Day", "Three Days Grace"],
    correct: 1,
  },
  {
    quiz: ["Something Just Like This ", "Hymn For The Weekend ", "Yellow"],
    options: ["The Police", "Coldplay"],
    correct: 2,
  },
  {
    quiz: ["Nothing Else Matter ", " Enter Sandman", "Master of Puppets"],
    options: ["Ozzy Osbourne", "Metallica"],
    correct: 2,
  },
  {
    quiz: ["November Rain", "Sweet Child O' Mine", "Don't Cry"],
    options: ["Guns N'Roses", "Aerosmith"],
    correct: 1,
  },
  {
    quiz: ["Californication", "Otherside", "Scar Tissue"],
    options: ["Imagine Dragons ", "Red Hot Chili Peppers"],
    correct: 2,
  },
  {
    quiz: ["Smells Like Teen Spirit", "Come As You Are ", "The Man Who Sold The World"],
    options: ["Nirvana", "Pearl Jam"],
    correct: 1,
  },

];


let score = 0;
let clicked = [];

scoreDisplay.textContent = score;

function populateQuestions() {
  questions.forEach((question) => {
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");
    questionDisplay.appendChild(questionBox);

    const logoDisplay = document.createElement("h1");
    logoDisplay.textContent = "🎵";
    logoDisplay.classList.add("logo-display")
    questionBox.append(logoDisplay);

    question.quiz.forEach((tip) => {
      const tipText = document.createElement("p");
      tipText.textContent = tip;
      questionBox.append(tipText);
    });

    const questionsButtons = document.createElement("div");
    questionsButtons.classList.add("question-buttons");
    questionBox.append(questionsButtons);

    question.options.forEach((option, optionIndex) => {
      const questionButton = document.createElement("button");
      questionButton.classList.add("question-button");
      questionButton.textContent = option;
      questionButton.addEventListener("click",() => checkAnswer(questionBox,questionButton,option,optionIndex +1,question.correct));
      questionsButtons.append(questionButton);
    })
      const answerDisplay = document.createElement("div");
      answerDisplay.classList.add("answer-display");
      questionBox.append(answerDisplay);


  })
}

populateQuestions();

function checkAnswer(questionBox,questionButton,option,optionIndex, correctAnswer){
  console.log("option:",option);
  console.log("optionIndex:",optionIndex);

  if(optionIndex == correctAnswer ){
    score++;
    scoreDisplay.textContent = score;
    addResult(questionBox, "Correct!!",'correct');
  }else{
    score--;
    scoreDisplay.textContent = score;
    addResult(questionBox, "Wrong", 'wrong');
  }
  clicked.push(option);
  questionButton.disabled = clicked.includes(option);
}

function addResult(questionBox,answer,className){
  const answerDisplay = questionBox.querySelector(".answer-display");
  answerDisplay.classList.remove('wrong');
  answerDisplay.classList.remove('correct');
  answerDisplay.classList.add(className);
  answerDisplay.textContent = "";
  answerDisplay.textContent = answer;

}
