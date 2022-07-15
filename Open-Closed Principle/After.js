// code that satisfies the open/closed principle

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }
  PrintQuestion() {
    console.log(this.description);
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }
  PrintQuestion() {
    console.log(this.description);
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }
  PrintQuestion() {
   console.log(this.description);
    console.log("Answer: ___________________");
  }
}

class RangeQuestion {
  constructor(description, min, max) {
    this.description = description;
    this.min = min;
    this.max = max;
  }
  PrintQuestion() {
    console.log(this.description);
    console.log(`min: ___________________`);
    console.log(`max: ___________________`);
  }
}

const questions = [
    new BooleanQuestion("Is this a boolean question?"),
    new MultipleChoiceQuestion("What is your favorite color?", ["Red", "Blue", "Green", "Yellow"]),
    new TextQuestion("What is your name?"),
    new RangeQuestion("What is your age range?", 18, 65)
];