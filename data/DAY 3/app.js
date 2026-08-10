const http = require('http');
// require('dotenv').config();
// const Port=3000;
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Context-Type': 'text/html'});
//     res.write('<h1>Hello, World!</h1>');
//     res.write('<p>This is a simple HTTP server</p>');
//     res.end();
// });
// server.listen(Port,()=>{
//     console.log(`Server is running on Port ${Port}`)
// });

const server = http.createServer((reqq,res)=>{
    if(reqq.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end(`
            <h1>style = 'color:navy'>Hello from Node.js!</h1>)
            <h1>Built with pure Node.js http module.</p>
            `);
    }else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({error: 'Route not found '}));
    }
});
server.listen(3000,()=>console.log("Running on :3000"));