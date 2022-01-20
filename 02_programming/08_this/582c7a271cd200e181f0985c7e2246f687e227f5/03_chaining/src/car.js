// Complete and add needed car properties:
const car = {
  speed: 0,
  driving: 0,
  distance: 0,
  start: function () {
    this.speed = 0;
    this.driving = 0;
    this.distance = 0;
    return car;
  },
  changeSpeed: function (maxSpeed) {
    this.speed = maxSpeed;
    return car;
  },
  drive: function (drivingTime) {
    this.driving = drivingTime / 60;
    return car;
  },
  showDistance: function () {
    let kM = this.speed * this.driving;
    this.distance = kM;
    console.log(`${this.distance} Km`);
    return car;
  },
};

module.exports = car;
