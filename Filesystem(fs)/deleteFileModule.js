const fs=require('fs');

fs.writeFile('./files/DeletedFile.txt','This file is deleted by using unlink', (err)=>{    // CREATE A NEW FILE
    if(err){
        console.log("error");
    }
    console.log("File created successfully");
})

fs.readFile('./files/writtenFile.txt', (err,data)=>{ //READ THE WRITTEN FILE
    if(err){
        console.log("Error");

    }
    console.log(data.toString());
})


fs.unlink('./files/deletedFile.txt',(err)=>{   // DELETE
    if(err){
        console.log("error");
    }

    console.log("Deleted successfully");
})