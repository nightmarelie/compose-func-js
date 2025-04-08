const util = require('util');

const Box = x => ({
    map: f => Box(f(x)),
    [util.inspect.custom]: () => `Box(${x})`,
});

const nextCharForNumberString = str => {
    return Box(str)
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(n => n + 1)
        .map(n => String.fromCharCode(n))
}

const result = nextCharForNumberString(" 64 ");

console.log(result);
