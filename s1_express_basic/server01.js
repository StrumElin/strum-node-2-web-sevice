
const express = require('express');


var app = express();

app.get('/',(req,res)=>{

    res.send('<h1>Hello express</h1>')
//    Content-Type:text/html; charset=utf-8
});

app.get('/txt',(req,res)=>{

    res.send('hello expresss txt')
//    Content-Type:text/html; charset=utf-8
})

app.get('/jsn',(req,res)=>{

    res.send({
        name:'strum',
        like:{
            food:'meat',
            drink:'tea'
        }
    })
//    Content-Type:application/json; charset=utf-8
})

app.get('/bad',(req,res)=>{

    res.send({
        'status':'1',
        'errorMessage':'bad'
    })

});


app.listen(3000);


























