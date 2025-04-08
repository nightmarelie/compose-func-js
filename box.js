// const nextCharForNumberString = str => {
//     const trimmed = str.trim();
//     const number = parseInt(trimmed);
//     const nextNumber = number + 1;
//
//     return String.fromCharCode(nextNumber);
// }

const nextCharForNumberString = str => {
    return [str]
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(n => n + 1)
        .map(n => String.fromCharCode(n))
}

const result = nextCharForNumberString(" 64 ");

console.log(result);
