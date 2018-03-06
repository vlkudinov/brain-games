export default {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  calc(a, b, op) {
    return this[op](a, b);
  },
  randomInteger() {
    return Math.round(Math.random() * 100);
  },
  randomElement(arr) {
    return Math.floor(Math.random() * arr.length);
  },
  isEven(num) {
    return num % 2 === 0;
  },
  gcd(a, b) {
    if (b === 0) {
      return Math.abs(a);
    }
    return this.gcd(b, a % b);
  },
};

