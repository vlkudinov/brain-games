
export default {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  calculate(a, b, op) {
    return this[op](a, b);
  },
  getRandomInt(max = 100) {
    return Math.round(Math.random() * max);
  },
  getRandomElement(arr) {
    return Math.floor(Math.random() * arr.length);
  },
  isEven(num) {
    return num % 2 === 0;
  },
  getGCD(a, b) {
    if (b === 0) {
      return Math.abs(a);
    }
    return this.getGCD(b, a % b);
  },
  getBalance(number) {
    const arr = String(number).split('').map(v => +v);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    if (max - min < 2) {
      return +arr.sort().join('');
    }
    arr[arr.indexOf(min)]++;
    arr[arr.indexOf(max)]--;

    return this.getBalance(+arr.join(''));
  },
  getAP() {
    const generateArr = () => {
      const step = this.getRandomInt(5) + 2;

      const iter = (acc, i) => {
        if (i >= 9) {
          return acc;
        }
        return iter([...acc, acc[i] + step], i + 1);
      };
      return iter([this.getRandomInt()], 0);
    };

    const removeElement = (arr, index) =>
      arr.reduce((a, v, i) => {
        if (i === index) {
          return [...a, '..'];
        }
        return [...a, v];
      }, []).join(' ');

    return { generateArr, removeElement };
  },
};

