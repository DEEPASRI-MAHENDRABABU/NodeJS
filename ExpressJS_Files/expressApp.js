//Importing express

const express=require('express');

const app=express();

const path=8000;

app.get('/' , (req,res)=>{   // app.get(path,callback)
    res.send("Hello everyone");   //res.send(data)
});

app.get('/about', (req,res)=>{
    res.send('This is about page');
})

app.listen(path,()=>{    //app.listen(port,callback)
    console.log("Server running");
})