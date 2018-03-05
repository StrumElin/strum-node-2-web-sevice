

1: heroku 发布你的app
heroke is a web sit .
its a web app for manageing web application that are hosted in the cloud

2:https://www.heroku.com
要翻墙:  strumzpk@sina.com箭头

https://dashboard.heroku.com/apps

3:https://devcenter.heroku.com/articles/heroku-cli
heroku 的cli

安装完成

命令: heroku login
    账号: xxx.gmail.com
    密码:s*1*!

    StrumdeMacBook-Pro:Node0305Express zhoupengkai$ heroku login
    Enter your Heroku credentials:
    Email: strumelin@gmail.com
    Password: ************
    Logged in as strumelin@gmail.com


    cli to heroku server machine

2: 获取 heroku 的 ssh key
heroku keys:add

StrumdeMacBook-Pro:Node0305Express zhoupengkai$ heroku keys:add
Found an SSH public key at /Users/zhoupengkai/.ssh/id_rsa.pub
? Would you like to upload it to Heroku? Yes
Uploading /Users/zhoupengkai/.ssh/id_rsa.pub SSH key... done


打印key
heroku keys

3: ssh -v git@heroku.com
他会去 communicate with the heroku servers


代码改变
第一 改变listern port

// heroku port config
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server start port ${port}` );
})

第二: package.json 改变
原来:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

现在:

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
     "start":"node s2_web_server/server02.js"
  },
测试:  npm start

运行
1:
命令:heroku create

命令: heroku create
>Creating app... done, ⬢ floating-meadow-79905
>https://floating-meadow-79905.herokuapp.com/ | https://git.heroku.com/floating-meadow-79905.git

在官网弄 简单的

 https://floating-meadow-79905.herokuapp.com/
 https://polar-basin-68785.herokuapp.com/


2: 将 github 代码 push 到 heroku上去
git push heroku

3: heroku open  会打开默认的url






3:cloud.neusoft.com 东软云平台