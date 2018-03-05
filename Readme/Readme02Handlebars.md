
__dirname 是主目录


1: static assets  :html css js and image

2: express middleware  and  app.use
   middleware lets you configure how you express application works

   app.use(express.static());

   epxress.static(__dirname + '/public') take the absolute path to the folder you want to serve

   localhost:3000/xxx.html

   render html with express

3:
    本地渲染好 然后通过 express 发送

template engine : let you render html buy do it in dynamic way
                     you can inject values like a use name or the current date inside of the template

    Handlebars 是 JavaScript 一个语义模板库，通过对view和data的分离来快速构建Web模板。
    它采用"Logic-less template"（无逻辑模版）的思路，
    在加载时被预编译，而不是到了客户端执行到代码时再去编译， 这样可以保证模板加载和运行的速度。


 app.set("view engine", "html");
 app.set("views", __dirname + "/views");


  view engine:

  Express.js view engine for handlebars.js

  handlebarsjs.com

  npm install --save hbs

  创建 views 文件夹  :  views 是express 使用templates 的默认文件夹

  app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About page',
        currentYear:new Data().getFullYear(),
    });
  })

  about.hbs
  <h1>pageTitle</h1>
  <p>{{currentYear}}</p>



 4:handlebarsjs partial['pɑːʃ(ə)l] 局部的

 partial is a partial piece of your web site ,you can resuse throughout your templates

 使用 : 必须得注册在 views 文件夹中

    hbs.registerPartials(__driname+'/views/partials') : take the directory you want to use for all if your handlebar partial file

然后在文件夹中创建 footer.hbs, 文件中加入 共用的代码

使用 footer.hbs partial:  在xxx.hbs 中 {{> footer}}


nodemon 监听 handlebars文件
nodemon app.js -e js,hbs

 handlebar 使用 函数

 hbs.registerHelper('functionName',(p)=>{
    return xxx
 })

 使用 {{functionName 参数1 参数2}}














