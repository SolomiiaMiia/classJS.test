// завдання 2

class Worker {
  constructor(firstName, secondName, rate, days) {
    this.name = firstName;
    this.surname = secondName;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days
  }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());