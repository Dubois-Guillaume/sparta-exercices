// Code the class here.
class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor(age: number) {
    if (age === 0) {
      this.height = 0;
    } else if (age > 0 && age <= 9) {
      this.height = age * 25;
    } else if (age >= 10 && age <= 20) {
      age = age - 9;
      this.height = 225 + age * 10;
    } else {
      this.height = 335;
    }
  }

  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}
// Leave the line below for tests to work properly.
export { Tree };
