const express=require('express');
const bodyParser=require('body-parser');
const app=express();
// body parser is use to parse post data
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/' ,(req,res)=>{
    res.sendFile(__dirname+'./public/index.html');
})

app.post('/login',(req,res)=>{
    const{username,password}=req.body;
    const validUsername='admin';
    const validPassword='password123';
    if(username===validUsername && password===validPassword){
        res.send('<h1>Login successful</h1>');
    }
    else{
        res.send('<h1> Invalid credentials</h1>');
    }
});
 const port=3000;
 app.listen(port,()=>{
    console.log("Server running...");
 })


 // run this code in the crome with localhost://3000


