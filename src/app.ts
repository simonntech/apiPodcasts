import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";


export const app = async (
    request: http.IncomingMessage,
    response: http.ServerResponse

) => {

    // QueryString => texto que vai mandar para a variável para ser usado de parâmetro
    const baseUrl = request.url?.split("?") [0];

    // listar podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    // listar por nome
    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
}