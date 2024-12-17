const fs=require('fs')

fs.writeFile('./files/DeletedFile.txt','This file is deleted by using unlink', (err)=>{    // CREATE A NEW FILE
    if(err){
        console.log("error");
    }
    console.log("File created successfully");
})

fs.readFile('./files/DeletedFile.txt', (err,data)=>{ //READ THE WRITTEN FILE
    if(err){
        console.log("Error");

    }
    console.log(data.toString());
})

fs.rename('./files/DeletedFile.txt' , './files/DelFile.txt' , (err)=>{  
//   const oldFile='./files/DeletedFile.txt'
//   const newFile='./files/DelFile.txt'
                                                    //--------ANOTHER METHOD
//   fs,rename(oldFile,newFile,(err)=>{
//     if(err){
//         console.log("Error");
//     }
//     console.log("Renamed successfully");
//   })

    if(err){
        console.log("Error");
    }

    console.log("renamed successfully")

    });

