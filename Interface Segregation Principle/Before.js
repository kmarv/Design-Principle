// code violates the interface segregation principle
//  the base class has 3 methods where subclasses " wall and turt"  only use 1 method but then are forced to depend on the 2 they dont use

class Entity {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }

  move() {
    console.log(`${this.name} moved `);
  }

  attack(target) {
    console.log(
      `${this.name} attacked ${target.name} for ${this.attackDamage} damage`
    );
    target.takeDamage -= this.attackDamage;
  }

  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} took ${damage} damage`);
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Character extends Entity {}

class Wall extends Entity {
  constructor(name, health) {
    super(name, 0, health);
  }

  move() {
    return null;
  }
  attack() {
    return null;
  }
}

class Turt extends Entity {
  constructor(name, attackDamage) {
    super(name, attackDamage, -1);
  }

  move() {
    return null;
  }
  takeDamage() {
    return null;
  }
}

const turt = new Turt("Turt", 10);
const character = new Character("Character", 10, 100);
const wall = new Wall("Wall", 200);

turt.attack(character);
character.attack(wall);
character.move();
