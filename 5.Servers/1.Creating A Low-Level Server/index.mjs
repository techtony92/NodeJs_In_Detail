import http from "http";

const host = `127.0.0.1`;
const port = `3500`;

const server = http.createServer((req,res)=>{
    if(req.method === "POST"){
        let body = '';
        req.on(`data`, chunk =>{
            body += chunk;
        });
        req.on(`close`,()=>{
            console.log(body);
        });
        res.writeHead(201);
        res.end(`OK`);
    }else{
        res.writeHead(200);
        res.end("hi");
    }
});

server.listen(port, host, ()=>{
    console.log(`Server on ${host}:${port}`);
})