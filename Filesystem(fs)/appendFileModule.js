const fs=require('fs')

fs.appendFile('./files/writtenFile.txt','This is the appended data' , (err)=>{
    if(err){
        console.log("Error");
    }
})

fs.readFile('./files/writtenFile.txt', (err,data)=>{
    if(err){
        console.log("Error");

    }
    console.log(data.toString());
})