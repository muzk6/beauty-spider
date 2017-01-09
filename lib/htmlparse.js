var http = require('http');
var cheerio = require('cheerio');

class HtmlParse {
    run(url, page) {
        return new Promise((resolve) => {
            http.get(url + '/' + page, (res) => {
                res.setEncoding('utf8');

                let html = '';
                res.on('data', (chunk) => {
                    html += chunk;
                });

                let src = [];
                res.on('end', () => {
                    let $ = cheerio.load(html);
                    $('.joke-list-item-main img.joke-main-img').each((index, item) => {
                        let small = $(item).attr('src');
                        let url = small.replace('/small/', '/big/');
                        let sp = small.split('/');
                        let name = sp[sp.length - 1];

                        src.push({name, url});
                    });

                    resolve(src);
                });
            });
        });
    }
}

module.exports = HtmlParse;