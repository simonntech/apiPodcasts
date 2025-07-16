import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcasts-repository"
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise <FilterPodcastModel> => {

    //interface de retorno
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };

    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString);

    //verificação de conteúdo

    responseFormat.statusCode = data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT;

    responseFormat.body = data;

    return responseFormat;
}