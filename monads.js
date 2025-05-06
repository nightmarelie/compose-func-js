const Box = require('./box');

// Box, Either, Task, List
// F.of, pure, chain (flat, bind, >>=)

httpGet('/users')
    .map(user => httpGet('/comments/' + user.id)) // Task(Task([Comment]))
