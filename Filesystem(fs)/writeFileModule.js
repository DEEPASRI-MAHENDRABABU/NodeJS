const fs=require('fs');

fs.writeFile('./files/writtenFile.txt','This is a new file created by using writeFile ' , (err)=>{
    if(err){
        console.log("Error");
    }
    console.log("File Written successfully");
})

// First we should create a file using write file and we show that file by using read file fs

fs.readFile('./files/writtenFile.txt', (err,data)=>{
    if(err){
        console.log("Error");

    }
    console.log(data.toString());
})