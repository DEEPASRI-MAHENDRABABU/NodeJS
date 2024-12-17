const fs=require('fs');

const path=require('path');

fs.readFile("./files/start.txt",function(err,data){ // WITHOUT USING PATH.JOIN
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




