const Box = require('./box');

// Box, Either, Task, List
// F.of, pure, chain (flat, bind, >>=)

httpGet('/users')
    .chain(user => httpGet('/comments/' + user.id)) // Task([Comment])
