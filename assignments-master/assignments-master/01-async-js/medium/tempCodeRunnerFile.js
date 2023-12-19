const fs = require('fs');

fs.readFile('read.txt',"utf-8",(err,data) => {
    if(err){
        console.log("Error !",err);
        return;
    }

    const words = data.split('').filter(str => str !== '').join('');

    fs.writeFile('w.txt',words,'utf-8',(err) =>{
        if(err){
            console.log("Error !",err);
            return;
        }
        console.log("File is created successfully without space");
    })
})