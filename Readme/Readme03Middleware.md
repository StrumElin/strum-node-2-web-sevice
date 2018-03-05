

1: express middleware

it allow you to add on to the exisiting function that express has

middleware : 使用例子

app.use(express.static(__dirname+'/public'));  we teach express how to read from a static directory

middleware 函数
app.use((req,res,next)=>{

    一个异步操作
    next();
})
next 参数作用: tell express that when you middleware function is done and this is useful

只有执行了 next() 这个app就会继续执行