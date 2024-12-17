const fs=require('fs');

const path=require('path');

fs.readFile("./files/start.txt",function(err,data){ // WITHOUT USING PATH
   if(err){
    console.log("Error");
   }
   console.log(data.toString())
})


//-----BY USING PATH.JOIN
fs.readFile(path.join(__dirname,'files','start.txt'), (err,data)=>{
    if(err){
        console.log("Error");
    }
    console.log(data.toString() );
    
})
//we can use both way for read and write file , the diff b/w this are by using path.join is for if you are using mac and windows we could confuss / \ so we use the path.join method



