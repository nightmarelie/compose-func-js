const Task = require('data.task');
const fs = require('fs');

const launchMissiles = () => {
    return new Task((rej, res) => {
        setTimeout(() => {
        })
        res('missiles launched');
    }, 1000);
};

const app = () => {
    fs.readFile('config.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        const newData = data.replace(/8/g, '6');

        fs.writeFile('config.json', newData, (err) => {
            if (err) {
                throw err;
            }

            console.log('File updated successfully');
        });
    });
}

app();
