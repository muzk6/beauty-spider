var request = require('request');
var fs = require('fs');

class Download {
    saveImage(url, path) {
        return new Promise((resolve) => {
            request(url, () => {
                console.log(path);
                resolve();
            }).pipe(fs.createWriteStream(path));
        });
    }
}

module.exports = Download;