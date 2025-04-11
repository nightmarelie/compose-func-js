const Right = x => ({
    map: f => Right(f(x)),
    fold: (_, g) => g(x),
})

const Left = x => ({
    map: f => Left(x),
    fold: (f, _) => f(x),
})

const Either = Right || Left;

const result = Right(2).map(x => x + 2).fold(x => x * 2, x => x / 2);

console.log(result);
