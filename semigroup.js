const res = 'a'.concat('b').concat('c');

const Sum = x => ({
    x,
    concat: ({x: y}) => Sum(x + y),
    fold: () => x,
    inspect: () => `Sum(${x})`,
});

const result = Sum(1).concat(Sum(2)).concat(Sum(3)).fold();

const All = x => ({
    x,
    concat: ({x: y}) => All(x && y),
    fold: () => x,
    inspect: () => `All(${x})`,
});

const result2 = All(true).concat(All(true)).concat(All(false)).fold();

const First = x => ({
    x,
    concat: (_) => First(x),
    fold: () => x,
    inspect: () => `First(${x})`,
});


const result3 = First('test1').concat(First('test2')).concat(First('test3')).fold();
console.log(result3);
