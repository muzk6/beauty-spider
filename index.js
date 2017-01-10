const HtmlParser = require('./lib/htmlparse');
const Downloader = require('./lib/download');
const path = require('path');
const mkdirp = require('mkdirp');
const moment = require('moment');

!async function () {
    let pamPage = process.argv[2];
    let pageRange;
    if (pamPage.includes('-')) {
        let p = pamPage.split('-');
        pageRange = [1 * p[0], 1 * p[1]];
    } else {
        pageRange = [1 * pamPage, 1 * pamPage];
    }

    for (let page = pageRange[0]; page <= pageRange[1]; page++) {
        let date = moment().format('YYYYMMDD');
        let dir = path.resolve(__dirname, `data/${date}/page${page}`);
        mkdirp(dir);

        console.log(`开始爬第${page}页美女......`);

        let hp = new HtmlParser();
        let src = await hp.run('http://www.haha.mx/topic/1/new', page);
        let proms = [];
        src.forEach((item) => {
            let dl = new Downloader();
            proms.push(dl.saveImage(item.url, path.resolve(dir, item.name)));
        });

        await Promise.all(proms);
        console.log(`第${page}页的美女爬完了！`);
    }
}();