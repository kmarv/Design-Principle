//  code that doesn't satisfy the dependency inversion principle

class Store {
    // if we want to use paypal comment out the stripe payment method and uncomment the paypal payment method
    constructor(user) {
        this.stripe = new this.stripe(user);

        // if we want to use the paypal payment method, we need to create a new instance of the paypal class 
        // this.paypal = new this.Paypal();
        // this.user = user;
    }

    purchasePlayStation(quantity){
        this.stripe.makePayment( quantity * 543);
        // make payment with paypal if we want to use the paypal payment method
        // this.paypal.makePayment(this.user, quantity * 543);
    }

    purchaseXbox(quantity){
        this.stripe.makePayment( quantity * 499);
        // this.paypal.makePayment(this.user, quantity * 499);
    }
}


class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amount) {
        console.log(`${this.user} made a payment of ${amount} with Stripe`);
    }
}

// class Paypal{
// makePayment(user, amount){
//     console.log(`${user} made a payment of ${amount} with Paypal`);
// }}


const store = new Store('John');
store.purchasePlayStation(3);
store.purchaseXbox(2);

// in a real application, to sastisfy the dependency inversion principle, is to create an intermediary class/API that is going to wrap around paypal and stripe. it will have the same exact functions , methods and interface 