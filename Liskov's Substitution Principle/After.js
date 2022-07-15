class Bird {
    layEgg () {
        console.log("can lay eggs");
    }
  }
  
  class FlyingBird {
    fly () {
        console.log("can fly");}
  }
  
  class SwimmingBird extends Bird {
    swim () {
        console.log("can swim");
    }
  }
  
  class Eagle extends FlyingBird {}
  
  class Penguin extends SwimmingBird {}
  
  const penguin = new Penguin();
  penguin.swim();
  penguin.layEgg();
  
  const eagle = new Eagle();
  eagle.fly();
  eagle.layEgg();