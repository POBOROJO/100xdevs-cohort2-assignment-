const fs = require("fs");

const contentToWrite = 'Hello, I am Parijat Bhattacharjee!';

fs.writeFile('w.txt',contentToWrite,"utf-8",(err) =>{
    if(!err){
      console.log("File is created successfully");
    }
    else{
      console.log("Error while creating file",err);
      return;
    }
})