import http from "http";
const server = http.createServer((req, res) => {
    console.log("Request received");

})
server.listen(3000,"127.0.0.1", () => {
    console.log("Server is running on port 3000");
})