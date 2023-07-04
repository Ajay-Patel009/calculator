const http=require('http');


const port=5100;

const server= http.createServer((req,res)=>{

    if(req.url=='/'){
        res.write("Server started");
        console.log("server started");
        res.end();
    }
    if(req.url=='/services'){
        res.write("services responding");
        console.log("services is responding...");
        res.end();
    }
 
})
server.listen(port);
