// Create a simple HTTP Server

 const http=require('http');

const server1=http.createServer((req,res)=>{
    res.write("Haiii");
    res.end();
});

server1.listen(8000,()=>{
    console.log("Server running");
})

// Another example for HTTP module

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Hai welcome to the page");
    }
    else if(req.url==='/about'){
        res.end("This is about page");
    }
    else{
        res.end("page not found");
    }
})

server.listen(3000,()=>{
    console.log("Server running");
})