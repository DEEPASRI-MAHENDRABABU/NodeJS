const fs=require('fs');

const path=require('path');

fs.readFile(path.join(__dirname,'./files/demo.txt'), (err,data)=>{
    if(err){
        console.log("error");
    }
    console.log("File readed successfully");
    console.log(data.toString());

});

fs.writeFile(path.join(__dirname,'.files','writefile.txt'),"this file is created by writefile module",(err)=>{
        console.log("Created successfully");

})