import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller';

//criando servidor
const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        // QueryString => texto que vai mandar para a variável para ser usado de parâmetro
        const [baseUrl, queryString] = req.url?.split("?") ?? [""];
        
        // listar podcasts
        if(req.method === "GET" && baseUrl === "/api/list") {
            await getListEpisodes(req, res);
        }

        // listar por nome
        if(req.method === "GET" && baseUrl === "/api/episode") {
            await getFilterEpisodes(req, res);
        }
});

//porta conexão
const port = process.env.PORT
server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})