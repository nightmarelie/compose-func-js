const Task = require('data.task');
const fs = require('fs');

const launchMissiles = () => {
    return new Task((rej, res) => {
        setTimeout(() => {
        })
        res('missiles launched');
    }, 1000);
};

const readFile = (fileName, encode) => new Task((rej, res) => fs.readFile(fileName, encode, (err, data) => {
    err ? rej(err) : res(data);
}));

const writeFile = (fileName, newData) => new Task((rej, res) => fs.writeFile(fileName, newData, (err) => {
    err ? rej(err) : res(() => console.log('File updated successfully'));
}));

const app = () => {
    return readFile('config.json', 'utf8')
        .map(data => data.replace(/8/g, '6'))
        .chain(newData => writeFile('config.json', newData));
}

app();
