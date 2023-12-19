const fs = require('fs');

function readandPrintfile(){
    fs.readFile("a.txt", 'utf-8',(err,data) => {
        if(!err){
            console.log("File content :",data); // Prints the file contents
        }
        else{
            console.log("Error reading the file!",err);
            return;
        }
    })
} 
async function Expensivefunc(){
    const itr= 1000000000;
    readandPrintfile();
    console.log("Staring the expensive function");
    for(let i=0;i<itr;i++){}
    console.log("Ending the expensive function");
}
Expensivefunc();