let calculator = {
  a:undefined, 
  b:undefined, 
  read() {
    this.a = +prompt("Введите число a");
    this.b = +prompt("Введите число b");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};
calculator.read();
alert ("Сумма a и b равна " + calculator.sum());
alert ("Произведение a и b равно " + calculator.mul());