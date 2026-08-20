const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello");
})

app.post("/submit",(req,res)=>{
    res.send("This is the post method");
    console.log(req.body);
})

app.listen(3000,()=>{
    console.log("server is running");
})