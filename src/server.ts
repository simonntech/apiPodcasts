import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller';

//criando servidor
const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        
        // listar podcasts
        if(req.method === "GET" && req.url === "/api/list") {
            await getListEpisodes(req, res);
        }

        // listar por nome
        if(req.method === "GET" && req.url === "/api/episode") {
            await getFilterEpisodes(req, res);
        }
});

//porta conexão
const port = process.env.PORT
server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})