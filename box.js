const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
});

const nextCharForNumberString = str => {
    return Box(str)
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(n => n + 1)
        .fold(n => String.fromCharCode(n))
}

const result = nextCharForNumberString(" 64 ");

console.log(result);
