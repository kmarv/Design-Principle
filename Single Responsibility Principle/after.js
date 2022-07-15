// code doesn't violate the single responsibility principle
// the code has 1 reason to change

import logMessage from './logger.js';

class CalorieTracker {
    constructor(calorieGoal) {
        this.calorieGoal = calorieGoal;
        this.calories = 0;
    }


    trackCalories(caloriescount) {
        this.currentCalories += caloriescount;
        if (this.currentCalories > this.calorieGoal) {
            logMessage(`You have exceeded your calorie goal by ${this.currentCalories - this.calorieGoal} calories`);
        }
    }

}


const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(700);
calorieTracker.trackCalories(1000);