## What is REST API?
<b>REST API</b> is a convention based on http through which we can create, read and update data between clients.

## What is HTTP?
<b>HTTP(Hypertext transfer protocol)</b> is the foundation of web communication. It defines how messages are formatted and trasmitted between clients and servers.Every time we visit a website, HTTP is working.

## What is NPM?
<b>NPM(NODE PACKAGE MANAGAER)</b> is the world's largest software library for javascript.

## MODULES:
 Modules are reusable pieces of code that helps you organize your application.
### Core Modules:
1. Core modules are compiled into node.js binary- no npm install required
2. Import with : const module = require('module-name')
    ```
    const fs = require("fs");

    fs.writeFileSync("test.txt", "Hello Node.js");

### Local Modules:
These are modules that you create yourself to organize your code

<b>MATH.js</b>   
```
function add(a, b) {
    return a + b;
}

module.exports = add;
```
<b>APP.js</b>  
```
const add = require("./math");

console.log(add(10, 20));