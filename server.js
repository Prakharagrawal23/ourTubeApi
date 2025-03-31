const http = require('http');
const app = require('/api/app');
const port = 3000;

const server = http.createServer(app)

server.listen(port,()=>{
    console.log('app is runing on port '+port)
})