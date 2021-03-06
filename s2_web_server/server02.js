/**
 * Created by zhoupengkai on 2018/3/5.
 */

//  以后使用 npm start
// package.json
    /*
     "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "start":"node s2_web_server/server02.js"
     },
     */


const express = require('express');

const hbs = require('hbs');

const fs = require('fs');

var path = require("path");

// heroku port config
const port = process.env.PORT || 3000;

var app = express();


//console.log('xx',__dirname+'../..' +'/views/partials'); ///Users/zhoupengkai/Desktop/Node/Node0305Express/s2_web_server

console.log('xxx',path.join(__dirname, '../', '/views/partials'));

//**************  handlebar ********************

//使用 handlebars 的 partial 局部模块  注意不要加  s2_web_server
//hbs.registerPartials('/views/partials');
hbs.registerPartials(path.join(__dirname, '../', '/views/partials'));

// hbs 文件必须都放置在  views  文件夹中 ,view2 中的set 无法被 render
//hbs.registerPartials(__dirname + '/views2');

//加入模板
app.set('view engine','hbs');

// hbs 加入函数功能
hbs.registerHelper('helperCurrentYear',()=>{
    return new Date().getFullYear()
})

hbs.registerHelper('helperUppercase',(p)=>{
    return p.toUpperCase();
})


//**************  middleware ********************

app.use((req,res,next)=>{

    var now = new Date().toString();

    var log = `${now} -- Request: ${req.url}`;

    fs.appendFile('log_server.log',log + '\n',(error)=>{

    });

   next();
});


//app.use((req,res,next)=>{
//
//    res.render('maintenance.hbs');
//
//});

app.use(express.static(__dirname +'/public'));



app.get('/',(req,res)=>{

    res.render('home.hbs',{
        pateTitle:'About Home',
        welcomeMessage:'welcome to home',
        //currentYear: new Date().getFullYear()
    })

})

app.get('/about',(req,res)=>{

    res.render('about.hbs',{
        pateTitle:'About Page',
        //currentYear: new Date().getFullYear()
    });

})

app.get('/project',(req,res)=>{

    res.render('project.hbs',{
        pateTitle:'Project Page',
        //currentYear: new Date().getFullYear()
    });

})

app.get('/set',(req,res)=>{

    res.render('set.hbs',{
        pateTitle:'Set Page',
        currentYear: new Date().getFullYear()
    });

})

app.listen(port,()=>{
    console.log(`Server start port ${port}` );
})