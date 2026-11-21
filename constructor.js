function Student(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;

  this.show = function() {
    return "Name: " + this.name + ", Age: " + this.age + ", City: " + this.city;
  };
}

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  show() {
    return "Car: " + this.brand + " " + this.model + " (" + this.year + ")";
  }
}

const student1 = new Student("Akbar", 20, "Faisalabad");
const student2 = new Student("Arooj", 21, "Lahore");
const car1 = new Car("Toyota", "Corolla", 2022);

const result = document.getElementById("result");

document.getElementById("btn1").addEventListener("click", function() {
  result.textContent = student1.show();
});

document.getElementById("btn2").addEventListener("click", function() {
  result.textContent = student2.show();
});

document.getElementById("btn3").addEventListener("click", function() {
  result.textContent = car1.show();
});

console.log(student1);
console.log(car1);