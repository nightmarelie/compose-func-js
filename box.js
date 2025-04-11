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

let result = nextCharForNumberString(" 64 ");


const moneyToFloat = str => {
    return Box(str).map(s => s.replace(/[$,]/g, '')).fold(s => parseFloat(s));
};

const percentToFloat = str => {
    return Box(str).map(s => s.replace(/[$,]/g, '')).map(s => parseFloat(s)).fold(n => n / 100)
};

const applyDiscount = (price, discount) => {
    const cost = moneyToFloat(price);
    const savings = percentToFloat(discount);

    return cost - (cost * savings);
}

result = applyDiscount("$100.00", "20%");

console.log(result);
