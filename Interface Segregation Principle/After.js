//  modified version to support interface segregation principle

class Entity {
    constructor(name) {
        this.name = name;
    }
}

const mover ={
    move(){
        console.log(`${this.name} moved `);
    }
}

const attacker = { 
    attack(target){
        console.log(
            `${this.name} attacked ${target.name} for ${this.attackDamage} damage`
        );
        target.takeDamage ( this.attackDamage);
    }
}

const hasHealth = {
    takeDamage(damage){
        this.health -= damage;
        console.log(`${this.name} took ${damage} damage`);
        console.log(`${this.name} has ${this.health} health remaining`);
    }
}


class Character extends Entity {
    constructor(name, attackDamage, health) {
        super(name);
        this.attackDamage = attackDamage;
        this.health = health;
    }
}

Object.assign(Character.prototype, mover, attacker, hasHealth);


class Wall extends Entity {
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}

Object.assign(Wall.prototype, hasHealth);

class Turt extends Entity {
    constructor(name, attackDamage) {
        super(name);
        this.attackDamage = attackDamage;
    }
}

Object.assign(Turt.prototype, attacker);

const turt = new Turt("Turt", 10);
const character = new Character("Character", 10, 100);
const wall = new Wall("Wall", 200);

turt.attack(character);
character.move();
character.attack(wall);