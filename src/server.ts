import * as http from "http";
import { app } from "./app";

//criando servidor
const server = http.createServer(app);

//conexão
const port = process.env.PORT

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})