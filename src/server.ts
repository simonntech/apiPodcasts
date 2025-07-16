import * as http from "http";

//criando servidor
const server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
});

//porta conexão
const port = process.env.PORT
server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})