

1: server02 的目录是
    /Users/zhoupengkai/Desktop/Node/Node0305Express/s2_web_server

   如果想在 server02 文件中去读取 上一层目录的资源 就需要使用 path了

     var path = require("path");

    console.log('xxx',path.join(__dirname, '../', '/views/partials'));

    '../'表示上一层  '../.. '表示上上一层
    结果:/Users/zhoupengkai/Desktop/Node/Node0305Express/views/partials
