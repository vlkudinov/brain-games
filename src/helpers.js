export default {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  calculator(a, b, op) {
    return this[op](a, b);
  },
  randomInteger(max = 100) {
    return Math.round(Math.random() * max);
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
  balance(number) {
    const arr = String(number).split('').map(v => +v);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    if (max - min < 2) {
      return +arr.sort().join('');
    }
    arr[arr.indexOf(min)]++;
    arr[arr.indexOf(max)]--;

    return this.balance(+arr.join(''));
  },
};

