# 美女爬虫
> [目标网站](http://www.haha.mx/topic/1/new)

#### 用例

- 爬第1页 `node app.js 1`
- 爬第5-10页 `node app.js 5-10`

#### 版本

##### v1.0.1

- 下载到的资源目录结构由 data/${page} 改为 data/${date}/${page}
- 添加批处理bat入口文件

##### v1.0.0

- 分页间同步下载，分页内异步下载
- 修复字符串分页范围比较的逻辑错误