const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    app.send("hi there !!!");
});

app .get("/packages",(req,res)=>{
const des = req.query.destination;
    if(!des){
        req.json(packages);
    }
    const result = packages.filter(item)
    
});

app.get("/packages/:id",(req,res)=>{
    const id = Number(req.params.id);
    const onePackage = packages.find(item=>item.id == id);
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});