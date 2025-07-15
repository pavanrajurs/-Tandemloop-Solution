class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  calculate(operation) {
    switch (operation.toLowerCase()) {
      case "addition":
        return this.a + this.b;
      case "subtraction":
        return this.a - this.b;
      case "multiplication":
        return this.a * this.b;
      case "division":
        return this.b !== 0 ? this.a / this.b : "Cannot divide by zero";
      default:
        return "Invalid operation";
    }
  }
}

const calc = new Calculator(10, 5);
console.log("Addition:", calc.calculate("addition"));
console.log("Subtraction:", calc.calculate("subtraction"));
console.log("Multiplication:", calc.calculate("multiplication"));
console.log("Division:", calc.calculate("division"));
