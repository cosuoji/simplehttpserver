const http = require("http")
const PORT = 8900;



http.createServer((req, res)=>{
    console.log("server running on port", PORT)
    res.write("My name is Chibueze Osuoji");
    res.end()
}).listen(PORT)