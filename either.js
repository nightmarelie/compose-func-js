const fs = require('fs');

const Right = x => ({
    map: f => Right(f(x)), fold: (_, g) => g(x),
})

const Left = x => ({
    map: f => Left(x), fold: (f, _) => f(x),
})

const Either = Right || Left;

let result = Right(2).map(x => x + 2).fold(x => 'error', x => x / 2);

const fromNullable = x => {
    return x ? Right(x) : Left('Value is null');
}

const findColor = (color) => {
    const found = ({
        red: '#FF0000', green: '#00FF00', blue: '#0000FF',
    })[color];

    return fromNullable(found);
};

// console.log(findColor('black').map(x => x.slice(1)).fold(x => x, x => x.toUpperCase()));

const tryCatch = (fn) => {
    try {
        return Right(fn());
    } catch (e) {
        return Left(e);
    }
}

// const getPort = () => {
//     try {
//         const str = fs.readFileSync('config.json');
//
//         const config = JSON.parse(str);
//         return config.port;
//     } catch (e) {
//         return 3000;
//     }
// }

const getPort = () => {
    return tryCatch(() => fs.readFileSync('config.json')).map(str => JSON.parse(str)).map(config => config.port).fold(() => 3000, x => x);
}


console.log(getPort());