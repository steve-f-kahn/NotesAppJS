var httpServer = require("http-server")
var path = require("path")

var pwd = path.join(__dirname)
var server = httpServer.createServer({root: pwd})
server.listen(8080)
