const request = require('request');
const fs = require('fs');

class Downloader {
    saveImage(url, path) {
        return new Promise((resolve) => {
            request(url, () => {
                console.log(path);
                resolve(path);
            }).pipe(fs.createWriteStream(path));
        });
    }
}

module.exports = Downloader;