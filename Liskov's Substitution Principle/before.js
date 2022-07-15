class Bird {  
    fly(){
        //..
        console.log("flying");
    }
}

class Eagle extends Bird {
    dive(){
        //..
        console.log("diving");
    }
}

const eagle = new Eagle();
eagle.fly();
eagle.dive();

class Penguin extends Bird(){
   //Problem: Can't fly! 
    //Solution: Add a fly method to the penguin class
}