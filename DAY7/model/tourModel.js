const fs  =require("fs");
const path = require("path");

const packageFilePath = path.join(__dirname,'..data/tour.json');

const getAll = () => {
    const data = fs.readFileSync(packageFilePath,'utf-8');
    return JSON.parse(data);
}

const getById = (id) => {
    const data = fs.readFileSync(packageFilePath,'utf-8');
    const package = JSON.parse(data);
    return package.find(pkg => pkg.id === id);
}