const fs = require("fs");
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "payload.json")));
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running");
});
