const Task = require('data.task');

const launchMissiles = () => {
    return new Task((rej, res) => {
        setTimeout(() => {
        })
        res('missiles launched');
    }, 1000);
};

launchMissiles().fork(e => console.log('error', e), x => console.log('success', x));
