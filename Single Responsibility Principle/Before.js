// code violate the single responsibility principle
// the code has 2 reasons to change 
//  1. change how to track our calories
// 2. change how we log our calories
class CalorieTracker {
    constructor(calorieGoal) {
        this.calorieGoal = calorieGoal;
        this.calories = 0;
    }


    trackCalories(caloriescount) {
        this.currentCalories += caloriescount;
        if (this.currentCalories > this.calorieGoal) {
            this.logCalorieSurplus();
        }
    }

    logCalorieSurplus() {
        console.log(`You have exceeded your calorie goal by ${this.currentCalories - this.calorieGoal} calories`);
    }
}


const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(700);
calorieTracker.trackCalories(1000);