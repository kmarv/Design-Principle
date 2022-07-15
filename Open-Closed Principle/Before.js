//  code that violates the open/closed principle
// if we are to add a new question type, we need to add a new case in the switch statement which makes the code open but not closed

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer: ___________________");
        break;
      default:
        break;
    }
    console.log("");
  });
}

const questions = [
  {
    type: "boolean",
    description: "Is this a boolean question?",
    options: ["True", "False"],
  },
  {
    type: "multipleChoice",
    description: "What is your favorite color?",
    options: ["Red", "Blue", "Green", "Yellow"],
  },
  { type: "text", description: "What is your name?" },
];

printQuiz(questions);
