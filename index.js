var HtmlParse = require('./lib/htmlparse');
var Download = require('./lib/download');
var path = require('path');
var mkdirp = require('mkdirp');

let pamPage = process.argv[2];
let pageRange;
if (pamPage.includes('-')) {
    let p = pamPage.split('-');
    pageRange = [1 * p[0], 1 * p[1]];
} else {
    pageRange = [1 * pamPage, 1 * pamPage];
}

!async function () {
    let hp = new HtmlParse();
    let dl = new Download();

    for (let page = pageRange[0]; page <= pageRange[1]; page++) {
        let dir = path.resolve(__dirname, `data/page${page}`);
        mkdirp(dir);

        console.log(`开始爬第${page}页美女......`);

        let src = await hp.run('http://www.haha.mx/topic/1/new', page);
        let proms = [];
        src.forEach((item) => {
            proms.push(dl.saveImage(item.url, path.resolve(dir, item.name)));
        });

        await Promise.all(proms);
        console.log(`第${page}页的美女爬完了！`);
    }
}();