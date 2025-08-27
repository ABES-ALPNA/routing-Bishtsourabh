const server=require("http")
server.createServer((req,res)=>{
    res.write("<h1>this is my first sevrer</h1>")
    res.end("")

}).listen(400,()=>{
   console.log('sever is started')
})