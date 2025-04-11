const Right = x => ({
    map: f => Right(f(x)),
    fold: (_, g) => g(x),
})

const Left = x => ({
    map: f => Left(x),
    fold: (f, _) => f(x),
})

const Either = Right || Left;

let result = Right(2).map(x => x + 2).fold(x => 'error', x => x / 2);

const findColor = (color) => {
    const found = ({
            red: '#FF0000',
            green:
                '#00FF00',
            blue:
                '#0000FF',
        }
    )[color];

    return found ? Right(found) : Left('Color not found');
};

console.log(findColor('red').map(x => x.slice(1)).fold(x => x, x => x.toUpperCase()));
