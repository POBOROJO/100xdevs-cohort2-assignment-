const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CardRouter = require("./routes");

app.use(express.json());
app.use("/",CardRouter);

app.listen(3000,async ()=>{
    try{
        const db = await mongoose.connect("url");
        console.log("Database connected and running at port 3000");
    }
    catch(e){
        console.error(e.message);
    }
});


