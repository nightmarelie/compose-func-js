const res = 'a'.concat('b').concat('c');

const Sum = x => ({
    x,
    concat: ({ x: y }) => Sum(x + y),
    fold: () => x,
    inspect: () => `Sum(${x})`,
});

const result = Sum(1).concat(Sum(2)).concat(Sum(3)).fold();

console.log(result);
