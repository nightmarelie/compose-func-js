const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    chain: f => f(x),
    apply: b => b.map(x),
});

const LazyBox = x => ({
    map: f => LazyBox(() => f(x())),
    fold: f => f(x()),
    chain: f => f(x),
});

const nextCharForNumberString = str => {
    return Box(str)
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(n => n + 1)
        .fold(n => String.fromCharCode(n))
}

let result = nextCharForNumberString(" 64 ");


const moneyToFloat = str => {
    return Box(str.replace(/[$,]/g, '')).map(s => parseFloat(s));
};

const percentToFloat = str => {
    return Box(str.replace(/[$,]/g, '')).map(s => parseFloat(s)).map(n => n / 100)
};

const applyDiscount = (price, discount) => {
    return moneyToFloat(price).fold(cost => percentToFloat(discount).fold(savings => cost - (cost * savings)))
}

result = applyDiscount("$100.00", "20%");

console.log(result);

module.exports = {
    Box,
    LazyBox,
};
