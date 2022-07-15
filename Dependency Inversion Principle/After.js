// code that satisfies the dependency inversion principle

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  purchasePlayStation(quantity) {
    this.paymentProcessor.pay(quantity * 543);
  }
  purchaseXbox(quantity) {
    this.paymentProcessor.pay(quantity * 499);
  }
}

// stripe payment processor
class stripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amount) {
    this.stripe.makePayment(amount);
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

//  paypal payment processor
class paypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }
  pay(amount) {
    this.paypal.makePayment(this.user, amount);
  }
}

class Paypal {
  makePayment(user, amount) {
    console.log(`${user} made a payment of ${amount} with Paypal`);
  }
}

// instantiate the stripe payment processor
const store = new Store(new stripePaymentProcessor("John"));
store.purchasePlayStation(3);
store.purchaseXbox(2);

// instantiate the stripe payment processor
const store2 = new Store(new paypalPaymentProcessor("John"));
store2.purchasePlayStation(3);
store2.purchaseXbox(2);
