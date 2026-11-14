const http =require("http");
const server = http.createServer((req,res)=>{
    if(req.url === "/submit" && req.method === 'POST'){
        let str= '';
        req.on("data", (ele)=>{
            str += ele;
        });

        req.on('end',()=>{
            body += chunk.tostring();
        });
    }
})