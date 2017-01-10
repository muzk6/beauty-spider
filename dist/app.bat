@echo off

echo 目标网站为 http://www.haha.mx/topic/1/new
echo.
echo 爬取第1页就输入 1
echo 爬取第5-10页就输入 5-10
echo.

set /p page= 请输入页码或页码范围：
node app.js %page%

pause