const { Box } = require('./box');

// Box, Either, Task, List
// F.of, pure, chain (flat, bind, >>=)

// httpGet('/users')
//     .chain(user => httpGet('/comments/' + user.id)) // Task([Comment])

// Box(Box('Hello World')) === Box('Hello World')
const join = x => x.chain(y => y);

const m = Box(Box(Box('Hello World')));

// First law
// join(m.map(join)) === join(join(m))

const res = join(m.map(join));
const res2 = join(join(m));

console.log(res);
console.log(res2);

// Second law
// join(Box.of(m)) === join(m.map(Box.of))
