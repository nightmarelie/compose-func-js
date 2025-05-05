const res = 'a'.concat('b').concat('c');

const Sum = x => ({
    x,
    concat: ({x: y}) => Sum(x + y),
    fold: () => x,
    inspect: () => `Sum(${x})`,
});

Sum.empty = () => Sum(0);

const result = Sum(1).concat(Sum(2)).concat(Sum(3)).fold();

const All = x => ({
    x,
    concat: ({x: y}) => All(x && y),
    fold: () => x,
    inspect: () => `All(${x})`,
});

All.empty = () => All(true);

const result2 = All(true).concat(All(true)).concat(All(false)).fold();

const First = x => ({
    x,
    concat: (_) => First(x),
    fold: () => x,
    inspect: () => `First(${x})`,
});


const result3 = First('test1').concat(First('test2')).concat(First('test3')).fold();

const acc1 = {
    name: First('John'),
    isPaid: All(true),
    age: Sum(30),
    friends: ['Alice', 'Bob'],
}

const acc2 = {
    name: First('John'),
    isPaid: All(true),
    age: Sum(25),
    friends: ['Charlie', 'Dave'],
}

const result4 = acc1.concat(acc2).concat(acc2).fold();

console.log(result4);
