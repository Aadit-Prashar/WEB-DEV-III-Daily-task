const express = require("express");
const app = express();
const port = 3000;
const packageJson = require("./tour.js");

app.get("/packages",(req,res)=>{
    // res.send("Hello, World!")
    const destination = req.query.des;
    if(!destination){
        return res.json(packageJson);
    }
    const filteredPackages = packageJson.filter((pkg)=>pkg.destination && pkg.destination.toLowerCase() === destination.toLowerCase());
    res.json(filteredPackages);
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});