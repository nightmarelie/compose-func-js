const add = (a, b) => a + b;

const inc = (x) => x + 1;

const modulo = (x, y) => x % y;

const isOdd = (x) => modulo(x, 2) === 1;

const res = add(1, 2);

const res2 = inc(res);

console.log(res);
console.log(res2);
