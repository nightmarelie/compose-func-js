// First law
// fx.map(f).map(g) === fx.map(x => g(f(x)));

// Second law
// fx.map(f) === f(x)

const {Box} = require('./box');
// const Either = require('./either');
// const Task = require('data.task');
//
// Task.of('Hello World'); // Task('Hello World')
// Either.of('Hello World'); // Right('Hello World')
// Box.of('Hello World'); // Box('Hello World')

// Applicative functor
const res = Box(x => x + 1).apply(Box(2));

console.log(res.fold(x => x));

// F(x).map(f) === F(f).apply(F(x))
