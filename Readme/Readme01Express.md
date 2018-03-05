nodejs web server : url to access you server app

expressjs.com

npm install --save express

router

port of machine

1:
var app = express();

2: config http router handle

3: app.get
: let us set up a handle for an http request root router

app.get('/',(request,response)=>{

  response.send('hellp express'); // body data : 比如 axios的 response.data

})

request: is stroe information about request coming in like the header that we used
response: set data back or set you status code and so on

3.1: string
 response.send('hello world')的是一个 字符串 那么
Response Headers 中的: Content-type:text/html;charset=utf-8

3.2: html
  response.send('<h1>xxx</h1>');
  Response Headers 中的: Content-type:text/html;charset=utf-8

3.3: json
    send里面可以是一个对象 不需要转化成JSON的  JSON.stringify(obj)
  response.send({'a':'aaa'});
  Response Headers 中的: Content-type: application/json;charset=utf-8

4: app.listen:
to bind the application to a port out machine

app.listen(3000);

app.listen(3000,()=>{
    console.log('server is up on port 3000');
})

5: 访问 localhost:3000
结果 :sending an string from the node server back to the browse client that make the request

6: express static  托管静态文件
通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。

将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了

app.use(express.static('public'));

http://localhost:3000/images/kitten.jpg

如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：

app.use(express.static('public'));
app.use(express.static('files'));

访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件。

如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：

app.use('/static', express.static('public'));
现在，你就爱可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件了。

http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
