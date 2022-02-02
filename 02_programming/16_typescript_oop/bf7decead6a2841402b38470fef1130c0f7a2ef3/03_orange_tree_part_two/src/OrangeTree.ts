import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  oranges: string[] = [];

  constructor(age: number) {
    super(age);
  }

  ageOneYear(): void {
    this.age++;
    // this.growOranges();
    if (this.isAlive() === true) {
      if (this.age > 0 && this.age <= 9) {
        this.height + 25;
      } else if (this.age >= 10 && this.age <= 20) {
        this.height + 10;
      } else {
        this.height;
      }
    }
  }

  isAlive(): boolean {
    let deathChance: number = 0;
    if (this.age === 100) {
      this.alive = false;
    } else if (this.age >= 50 && this.age <= 99) {
      const randomDeathPercentage: number = Math.ceil(Math.random() * 4);
      deathChance += randomDeathPercentage;
      if (deathChance >= 100) {
        this.alive = false;
        deathChance = 0;
      } else {
        this.alive = true;
      }
    }
    return this.alive;
  }
}
// Leave the line below for tests to work properly.
export { OrangeTree };
