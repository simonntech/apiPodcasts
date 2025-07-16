import * as http from "http";
import {getListEpisodes} from './controllers/podcasts-controller';

//criando servidor
const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        if(req.method === "GET") {
            await getListEpisodes(req, res);
        }
});

//porta conexão
const port = process.env.PORT
server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})