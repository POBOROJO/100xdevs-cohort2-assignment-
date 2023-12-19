const fs = require('fs');

fs.readFile('read.txt',"utf-8",(err,data) => {
    if(err){
        console.log("Error !",err);
        return;
    }

    const word = data.split(' ').filter(word => word !== '').join(' ');

    fs.writeFile('w.txt',word,'utf-8',(err) =>{
        if(err){
            console.log("Error !",err);
            return;
        }
        console.log("File is created successfully without space");
    })
})