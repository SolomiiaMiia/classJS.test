// завдання 1
class CoffeeMake {
  constructor(coffe) {
    this.coffe = coffe;
  }
  on() {
    return 'on'
  }
  off() {
    return 'off'
  }
}


let coffeeM = new CoffeeMake()
console.log(coffeeM.on());

class DripCoffee extends CoffeeMake {
  preheating() {
    return 'yes'
  }
}

let drCoffee = new DripCoffee()
console.log(drCoffee.off());
console.log(drCoffee.preheating());

class HornCoffee extends DripCoffee {
  twoCupc() {
    return 'yes'
  }
}

let hrCoffee = new HornCoffee()
console.log(hrCoffee.on());
console.log(hrCoffee.preheating());
console.log(hrCoffee.twoCupc());

class CoffeeMachine extends HornCoffee {
  countsCups() {
    return 'yes'
  }
}

let mchCoffee = new CoffeeMachine()
console.log(mchCoffee.off());
console.log(mchCoffee.twoCupc());
console.log(mchCoffee.countsCups());